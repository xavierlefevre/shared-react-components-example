from datetime import date, timedelta, datetime
import numpy
import os
import requests
import sys

config = ["develop", "master"]

def getLastWeekTimeWindow():
    dt = date.today()
    start = dt - timedelta(days=dt.weekday()+7)
    end = start + timedelta(days=7)
    return (start.isoformat(), end.isoformat())

def getLastWeekJobsFromBranch(branch_name):
    start_date, end_date = getLastWeekTimeWindow()
    offset = 0
    print "Retrieving CircleCI jobs started after %s on branch %s"%(start_date, branch_name)
    print "Page %s..."%(str(offset + 1))
    jobs = requests.get('https://circleci.com/api/v1.1/project/github/shared-components/shared-components/tree/' + branch_name + '?limit=100&circle-token='+circle_ci_token).json()
    while jobs[-1]['start_time'] > start_date:
        offset += 1
        print "Page %s..."%(str(offset + 1))
        jobs += requests.get('https://circleci.com/api/v1.1/project/github/shared-components/shared-components/tree/' + branch_name + '?limit=100&offset='+str(100*offset)+'&circle-token='+circle_ci_token).json()

    print "Removing jobs started after %s"%end_date
    jobs = filter(lambda x: x['start_time'] > start_date, jobs)
    jobs = filter(lambda x: x['start_time'] < end_date, jobs)
    print "Number of jobs considered: %d"%(len(jobs))
    return jobs

def buildWorkflows(jobs):
    workflows = {}
    for job in jobs:
        workflow_id = job['workflows']['workflow_id']
        if not workflows.has_key(workflow_id):
            workflows[workflow_id] = []
        workflows[workflow_id].append(dict(
            duration=job['build_time_millis'],
            name=job['workflows']['job_name'],
            stop_time=job['stop_time'],
            start_time=job['start_time'],
            upstream=job['workflows']['upstream_job_ids'],
            status=job['status']
        ))
    return workflows.values()

def removeFailedFlows(workflows):
    def everyJobIsSuccessful(workflow):
        for i in workflow:
            if i["status"] != 'success':
                return False
        return True
    return filter(lambda x: everyJobIsSuccessful(x), workflows)

def computeWorkflowDuration(workflow):
    workflow_starting_time = min(map(lambda x: x['start_time'], workflow))
    workflow_ending_time = max(map(lambda x: x['stop_time'], workflow))

    return (datetime.strptime(workflow_ending_time[:-1]+'000', '%Y-%m-%dT%H:%M:%S.%f') - datetime.strptime(workflow_starting_time[:-1]+'000', '%Y-%m-%dT%H:%M:%S.%f')).total_seconds()

def computeDurationIndicatorForBranch(branch):
    jobs = getLastWeekJobsFromBranch(branch)
    workflows = buildWorkflows(jobs)
    successful_workflows = removeFailedFlows(workflows)
    print "Number of successful workflows: %d"%(len(successful_workflows))

    wf_duration = map(lambda x: float(computeWorkflowDuration(x)), successful_workflows)
    print "Longest %s workflow duration: %fs"%(branch, max(wf_duration))
    print "Median %s workflow duration: %fs"%(branch, numpy.median(wf_duration))

if __name__ == '__main__':
    try:
        circle_ci_token = os.environ["CIRCLE_CI_TOKEN"]
    except KeyError:
        print "Circle CI token is not set, please set environment variable CIRCLE_CI_TOKEN"
        sys.exit(1)
    for branch in config:
        print "Analysing workflows on " + branch + " branch"
        print "==================================="
        computeDurationIndicatorForBranch(branch)
        print "\n\n"
