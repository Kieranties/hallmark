import MDXComponents from '@docusaurus/theme-classic/lib/theme/MDXComponents';
import {Mark} from '@site/src/components/hallmark/docs/Mark';
import {Callout} from '@site/src/components/hallmark/docs/Callout';
import {StateChip} from '@site/src/components/hallmark/docs/StateChip';
import {PrincipleCard} from '@site/src/components/hallmark/docs/PrincipleCard';
import {DefinitionTable} from '@site/src/components/hallmark/docs/DefinitionTable';
import {TermEntry} from '@site/src/components/hallmark/docs/TermEntry';
import {Badge} from '@site/src/components/hallmark/core/Badge';
import {Tag} from '@site/src/components/hallmark/core/Tag';
import {Card} from '@site/src/components/hallmark/core/Card';
import {Button} from '@site/src/components/hallmark/core/Button';

// Available in every .md / .mdx file without an import.
// CodeBlock is deliberately absent: Docusaurus supplies its own, and the design
// system's Prism theme already repaints it.
export default {
  ...MDXComponents,
  Mark,
  Callout,
  StateChip,
  PrincipleCard,
  DefinitionTable,
  TermEntry,
  Badge,
  Tag,
  Card,
  Button,
};
