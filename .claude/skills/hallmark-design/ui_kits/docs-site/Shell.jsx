const DS = window.HallmarkDesignSystem_ad5c38 || {};
const { Navbar, SidebarNav, TableOfContents, SearchField, ThemeToggle, Logo, Button } = DS;
const Footer = DS.Footer || (() => null);

function Icon({ name, size = 14 }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: "inline-flex" }} />;
}

/** data.js stores icon NAMES; the sidebar wants nodes. */
function withIcons(sections) {
  return sections.map((sec) => ({ ...sec, items: (sec.items || []).map((it) => ({
    ...it,
    icon: it.icon ? <Icon name={it.icon} /> : null,
    items: (it.items || []).map((sub) => ({ ...sub, icon: null })),
  })) }));
}

function Shell({ page, setPage, theme, setTheme, children, sidebar, toc, activeDoc, setActiveDoc, activeToc }) {
  return (
    <div style={{ minHeight: "100%", background: "var(--bg-page)", color: "var(--text-body)", fontFamily: "var(--font-sans)" }}>
      <Navbar
        items={window.HALLMARK_DATA.nav}
        active={page}
        onNavigate={(it) => setPage(it.id)}
        right={<>
          <SearchField width={210} icon={<Icon name="search" />} />
          <ThemeToggle theme={theme} onChange={setTheme} icons={{ dark: <Icon name="moon" />, light: <Icon name="sun" /> }} />
          <Button variant="ghost" size="sm" as="a" href="#"><Icon name="github" /> Repo</Button>
        </>}
      />
      <div style={{ display: "flex", alignItems: "flex-start", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        {sidebar && (
          <div style={{ position: "sticky", top: "var(--navbar-height)", alignSelf: "flex-start", maxHeight: "calc(100vh - var(--navbar-height))", overflowY: "auto", borderRight: "1px solid var(--border-subtle)" }}>
            <SidebarNav sections={withIcons(window.HALLMARK_DATA.sidebar)} active={activeDoc} onNavigate={(it) => setActiveDoc(it.id)} />
          </div>
        )}
        <main style={{ flex: 1, minWidth: 0, padding: sidebar ? "36px 40px 72px" : 0 }}>{children}</main>
        {toc && (
          <div style={{ position: "sticky", top: "var(--navbar-height)", alignSelf: "flex-start", paddingRight: 24 }}>
            <TableOfContents items={toc} active={activeToc} />
          </div>
        )}
      </div>
      <Footer
        blurb="A delivery practice. What is claimed is proven; what can be derived is not decided."
        columns={[
          { label: "Practice", items: [{ label: "Overview" }, { label: "Principles" }, { label: "Practice and application" }] },
          { label: "Reference", items: [{ label: "Terminology" }, { label: "Work types" }, { label: "Standards" }] },
          { label: "Apply", items: [{ label: "Declaring an application" }, { label: "Concessions" }, { label: "Subtypes" }] },
        ]}
        copyright="© 2026 Hallmark. Built on the practice it describes."
        note="Practice v1.0" />
    </div>
  );
}

Object.assign(window, { Shell, Icon });
