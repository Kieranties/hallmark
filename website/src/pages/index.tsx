import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {PrincipleCard} from '@site/src/components/hallmark/docs/PrincipleCard';
import {DefinitionTable} from '@site/src/components/hallmark/docs/DefinitionTable';
import {Mark} from '@site/src/components/hallmark/docs/Mark';
import {Card} from '@site/src/components/hallmark/core/Card';

/**
 * The landing page.
 *
 * It is a page rather than a doc, because the design gives it a hero and no
 * sidebar — a doc under `routeBasePath: '/'` would inherit both the sidebar and
 * the article chrome. Structure follows ui_kits/docs-site/LandingPage.jsx.
 */

const PRINCIPLES = [
  {
    name: 'Provable',
    test: 'If something is claimed, there must be evidence to prove it.',
    body: 'Nothing advances on assertion. A specification that was never seen to pass is an intention with a filename.',
  },
  {
    name: 'Derived',
    test: 'If something can be determined from the record, it must not be decided.',
    body: 'What a change touches decides what it must satisfy — nobody rules a change small enough to skip something.',
  },
  {
    name: 'Traceable',
    test: 'If something is claimed, decided or moved, there must be a path to what produced it.',
    body: 'One door in, identifiable actors, and a recorded reason at every gate.',
  },
  {
    name: 'Invariant',
    test: 'Whatever the size of the work, or the kind of actor, the same process applies.',
    body: 'The practice runs all-human, all-agent, or any mix, without alteration.',
  },
];

const ACTS = [
  ['Capture', 'Anyone', 'A request'],
  ['Sift', 'Worker', 'A typed item, agreed to be done'],
  ['Specify', 'Worker', 'Specifications that fail'],
  ['Plan', 'Worker', 'An ordered route, and a declared touch'],
  ['Action', 'Worker', 'The change, and a result for every criterion'],
  ['Validate', 'The persona, or a recorded stand-in', 'A judgement on the outcome'],
  ['Publish', 'Worker', 'A delivered result, confirmed — and the state complete'],
];

const ROLES = [
  ['Worker', 'Advances the work', 'Accumulates — the only role that does'],
  ['Verifier', 'Confirms it against a standard', 'Denied — never saw the doing'],
  ['Sentinel', 'Watches for drift, staleness and cost', 'Outside any work session'],
  ['Decider', 'Commits money, risk or a promise', 'Denied — decides from the record'],
];

const WAYS_IN = [
  ['Terminology', 'Every word the practice reserves, and the page that owns it.', '/terminology'],
  ['The process', 'Capture through publish, act by act.', '/process/'],
  ['Applying it', 'Declare personas, disciplines, standards and subtypes.', '/apply/declaring-an-application'],
];

function SectionHead({label, title, children}: {label?: string; title: string; children?: React.ReactNode}) {
  return (
    <div className="hm-sectionhead">
      {label && <div className="hm-sectionhead__label">{label}</div>}
      <h2 className="hm-sectionhead__title">{title}</h2>
      <div className="hm-rule" />
      {children && <p className="hm-sectionhead__lede">{children}</p>}
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="A delivery practice, stamped and provable"
      description="Hallmark defines a principled process through which work of any size is delivered, standards are met, and what is claimed of the result is proven.">
      <section className="hm-hero">
        <h1 className="hm-hero__title">A delivery practice, stamped and provable</h1>
        <p className="hm-hero__lede">
          Hallmark defines a <Mark variant="keyword">principled</Mark> process through which
          work of any size is delivered, <Mark variant="keyword">standards</Mark> are met, and
          what is claimed of the result is <Mark variant="keyword">proven</Mark>.
        </p>
        <div className="hm-hero__actions">
          <Link className="button button--primary" to="/practice/overview">
            Read the practice
          </Link>
          <Link className="button button--secondary" to="/terminology">
            Terminology
          </Link>
        </div>
      </section>

      <section className="hm-section">
        <SectionHead label="Principles" title="Four principles, each a test that can be failed">
          The practice is the interface; an application is an implementation of it. It states
          what must hold, who may act, and how work travels — and it never names a tool.
        </SectionHead>
        <div className="hm-principles">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.name} index={i + 1} name={p.name} test={p.test}>
              {p.body}
            </PrincipleCard>
          ))}
        </div>
      </section>

      <section className="hm-section">
        <SectionHead
          label="The track"
          title="Work advances by acts, and every act leaves something behind"
        />
        <div className="hm-track">
          <DefinitionTable columns={['Act', 'Held by', 'Leaves behind']} rows={ACTS} />
          <Card padding={22}>
            <div className="hm-rolecard__label">Roles</div>
            <div className="hm-rolecard__list">
              {ROLES.map(([role, does, context]) => (
                <div key={role}>
                  <div className="hm-rolecard__name">{role}</div>
                  <div className="hm-rolecard__does">{does}</div>
                  <div className="hm-rolecard__context">{context}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="hm-section hm-section--last">
        <SectionHead label="Start here" title="Three ways in" />
        <div className="hm-waysin">
          {/* A plain Link rather than <Card as={Link}>: Card types `as` as a string
              union, and widening it would mean editing a file that is copied
              verbatim from the design system. hm-waycard carries the same card
              spec — surface, hairline, 6px radius, gold border on hover. */}
          {WAYS_IN.map(([title, blurb, to]) => (
            <Link key={title} className="hm-waycard" to={to}>
              <div className="hm-waycard__head">
                <span className="hm-waycard__title">{title}</span>
                <span className="hm-waycard__arrow" aria-hidden="true" />
              </div>
              <p className="hm-waycard__blurb">{blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
