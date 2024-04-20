import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    const originalText = readingTime.text;
    const spanishText = originalText.replace('min read', 'min de lectura');

    data.astro.frontmatter.minutesRead = spanishText;
  };
}