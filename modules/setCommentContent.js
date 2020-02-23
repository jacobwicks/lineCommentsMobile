import { addLabelToContent } from './addLabelToContent.js';
import { getLineNumber } from './getLineNumber.js';

export const setCommentContent = ({ blockComments, comment, commentIndex }) => {
    const lineNumber = getLineNumber(comment);
    //this comment gets the comment container style applied
    comment.classList.add('line_comment_container');

    //get the content of the comment
    const content = comment.innerHTML;

    //add a label span to the content
    const label = `Line: ${lineNumber}`;
    const labeledContent = addLabelToContent({ content, label });

    //the class is line_comment_content
    //which is max_height of 3 lines when collapsed
    let classList = 'line_comment_content';

    //returns undefined or the line number of the next comment
    const nextCommentLineNumber =
        blockComments[commentIndex + 1] &&
        getLineNumber(blockComments[commentIndex + 1]);

    //if the next comment is closer than 4 lines
    //make this comment_content single_height, so max_height of 1 line
    if (
        nextCommentLineNumber !== undefined &&
        nextCommentLineNumber - lineNumber < 4
    ) {
        //make the comment container single height
        comment.classList.add('single_height');
        //content classList also has single height
        classList += ' single_height';
    }

    //put the labeled content inside a div with the container classList
    const newContent = `<div class="${classList}">${labeledContent}</div>`;

    //set the comment innerHTML to the new div
    comment.innerHTML = newContent;
};
