const request = require('superagent');
const markdownpdf = require('markdown-pdf');
const fs = require('fs');

// This script retrieves a problem from our problem solving board
// and outputs it as a nice PDF in the /pdfs folder
// To use, at the root of the SharedComponents projet:
// yarn problem-to-pdf { card number from Trello }

const trelloFetch = restOfURL => {
  // Get key and token from Trello: https://developers.trello.com/page/authorization
  const trelloToken = '';
  const trelloKey = '';
  const trelloAPIEndPoint = 'https://api.trello.com/1';

  const completeUrl =
    trelloAPIEndPoint +
    restOfURL +
    '?key=' +
    trelloKey +
    '&token=' +
    trelloToken;

  return request
    .get(completeUrl)
    .then(res => res.body)
    .catch(console.log);
};

const getCardFromBoard = cardID => {
  const problemBoardID = '9L8XAsnr';
  const restOfURL = `/boards/${problemBoardID}/cards/${cardID}`;
  return trelloFetch(restOfURL);
};

const getCardAttachments = cardID => {
  const restOfURL = `/cards/${cardID}/attachments`;
  return trelloFetch(restOfURL);
};

const getCard = cardID => {
  const restOfURL = `/cards/${cardID}`;
  return trelloFetch(restOfURL);
};

const hasTag = (card, tagName) =>
  card.labels.find(label => label.name === tagName);

const retrieveIDFromURL = URL => {
  const retrieveCardIDFromURLRule = new RegExp(
    'https://trello.com/c/([A-Za-z0-9]*)'
  );
  const characMatchingRegex = retrieveCardIDFromURLRule.exec(URL);
  return characMatchingRegex && characMatchingRegex[1];
};

const passOnlyIfTrelloAttachment = URL => {
  const checkIfTrelloURLRule = new RegExp('https://trello.com/.*');
  const characMatchingRegex = checkIfTrelloURLRule.exec(URL);
  return characMatchingRegex;
};

const getCardDetailsAttachments = card =>
  getCardAttachments(card.id).then(attachmentsList => {
    const matchingTrelloCards = [];

    attachmentsList.forEach(attachment => {
      if (passOnlyIfTrelloAttachment(attachment.url)) {
        const trelloCardID = retrieveIDFromURL(attachment.url);

        if (trelloCardID) {
          matchingTrelloCards.push(getCard(trelloCardID));
        } else {
          console.log('Did not find an ID in the URL');
        }
      }
    });

    return Promise.all(matchingTrelloCards);
  });

const getAssociatedRootCause = card => {
  let rootCause;
  if (hasTag(card, 'Mega')) {
    return getCardDetailsAttachments(card).then(attachments => {
      attachments.forEach(attachment => {
        if (attachment && hasTag(attachment, 'root cause')) {
          rootCause = attachment;
        }
      });
      return { card, rootCause };
    });
  }

  return { card };
};

const getAssociatedProblems = ({ card, rootCause }) => {
  if (rootCause) {
    return getCardDetailsAttachments(rootCause).then(problems => {
      return { card, rootCause, problems };
    });
  }
  return { card };
};

const ticketToPDF = card => {
  const PDFOutputPath = `${__dirname}/pdfs/problem-${card.idShort}.pdf`;
  const finalMarkdown = `# ${card.name}
------
${card.desc}`;

  markdownpdf()
    .from.string(finalMarkdown)
    .to(PDFOutputPath, function() {
      console.log(
        `Created the pdf for your problem ${card.idShort} - ${
          card.name
        } here: `,
        PDFOutputPath
      );
    });
};

const problemTicketToPDF = ({ card, rootCause, problems }) => {
  ticketToPDF(card);
  problems && problems.forEach(ticketToPDF);
};

const outputProblemAsPDF = () => {
  const args = process.argv.slice(2);

  if (args[0]) {
    getCardFromBoard(args[0])
      .then(getAssociatedRootCause)
      .then(getAssociatedProblems)
      .then(problemTicketToPDF);
  } else {
    console.log(`How to use:
- yarn problem-to-pdf { card number from Trello }
`);
  }
};

outputProblemAsPDF();
