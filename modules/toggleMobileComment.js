//finds a comment div in the document
const findComment = ({ blockIndex, lineNumber }) => {
    //generate the id of the target comment
    const commentId = `block.${blockIndex}.line.${lineNumber}`;

    return document.getElementById(commentId);
};

export const toggleMobileComment = ({ blockIndex, lineNumber }) => {
    //a mobile comment is toggled
    const targetComment = findComment({ blockIndex, lineNumber });

    //all other comments should be closed
    //find all comments and remove the 'open' class from them
    const comments = [...document.getElementsByClassName('lineComment')];
    comments.forEach(comment => comment.classList.remove(''));
    //then, if the target comment is open
    //close the target comment

    //else, if the target comment is closed
    //open the target comment

    console.log(
        `clicked block ${blockIndex} line ${lineNumber}`,
        targetComment
    );
};
