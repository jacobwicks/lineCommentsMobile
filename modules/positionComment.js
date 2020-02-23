import { getLineNumber } from './getLineNumber.js';
import { getOffsetTop } from './getOffsetTop.js';

export const positionComment = ({
    blockIndex,
    codeBlockWidth,
    comment,
    commentWidth,
    isMobile,
    leftOffset,
    lineHeight,
}) => {
    //get the assigned line number
    const lineNumber = getLineNumber(comment);

    const id = `block.${blockIndex}.line.${lineNumber}.lineNumber`;
    //use getElementById to find the div that contains the line number
    const targetLine = document.getElementById(id);

    //find the vertical position of the line number
    const topOffset = getOffsetTop(targetLine);

    //set the position of the comment
    if (isMobile) {
        comment.style.width = `${codeBlockWidth}px`;
        comment.style.top = `${topOffset + lineHeight}px`;
        comment.style.left = `${leftOffset}px`;
    } else {
        comment.style.width = `${commentWidth}px`;
        comment.style.top = `${topOffset}px`;
        comment.style.left = `${leftOffset - commentWidth - 48}px`;
    }
};
