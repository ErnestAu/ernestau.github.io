/**
 * Makes a single newline render as a line break.
 *
 * Markdown's default is to collapse single newlines, so only a blank line
 * starts a new paragraph. That rule comes from an era of hard-wrapping prose
 * at 80 columns; when you write one long line per thought, it means the line
 * breaks you typed silently disappear.
 *
 * This walks text nodes and splits them on "\n", inserting a hard break in
 * place of each one. Net effect while writing:
 *
 *   one Enter  -> line break, same paragraph
 *   two Enters -> new paragraph
 *
 * Code blocks are untouched: their content is a `code` node, not `text`.
 */
export const softBreaks = {
  name: 'soft-breaks',
  text(node, ctx) {
    if (!node.value.includes('\n')) return;

    const out = [];
    node.value.split('\n').forEach((part, i) => {
      if (i > 0) out.push({ type: 'break' });
      if (part !== '') out.push({ type: 'text', value: part });
    });

    ctx.replaceNode(node, out);
  },
};
