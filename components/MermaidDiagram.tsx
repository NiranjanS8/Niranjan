"use client";

import { useEffect, useState } from "react";
import { Code, Eye, Sparkles } from "lucide-react";

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function renderChart() {
      try {
        setLoading(true);
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: "#fff9c4",
            primaryTextColor: "#2d2d2d",
            primaryBorderColor: "#2d2d2d",
            lineColor: "#2d2d2d",
            secondaryColor: "#ffffff",
            tertiaryColor: "#fdfbf7",
            fontFamily: "var(--font-heading), 'Kalam', cursive, sans-serif",
            fontSize: "15px",
          },
          look: "handDrawn",
          securityLevel: "loose",
        });

        // Unique ID without special characters
        const diagramId = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(diagramId, chart.trim());

        if (!isCancelled) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : "Unable to render diagram");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    renderChart();

    return () => {
      isCancelled = true;
    };
  }, [chart]);

  return (
    <div
      className="sketch-card my-6 overflow-hidden border-2 border-foreground bg-card p-4 sm:p-6"
      style={{ borderRadius: "22px 34px 24px 30px / 30px 24px 34px 22px" }}
    >
      <div className="mb-4 flex items-center justify-between border-b-2 border-dashed border-foreground/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="icon-badge h-8 w-8">
            <Sparkles className="h-4 w-4 text-accent" />
          </span>
          <span className="font-heading text-lg font-bold text-foreground">
            Architecture / Workflow Diagram
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="sketch-chip flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium hover:bg-[var(--post-it)]"
          title={showCode ? "Show Diagram" : "View Mermaid Source"}
        >
          {showCode ? (
            <>
              <Eye className="h-3.5 w-3.5" />
              <span>Diagram</span>
            </>
          ) : (
            <>
              <Code className="h-3.5 w-3.5" />
              <span>Source</span>
            </>
          )}
        </button>
      </div>

      {showCode ? (
        <pre className="overflow-x-auto rounded border border-foreground/20 bg-foreground/5 p-4 text-sm font-mono text-foreground">
          <code>{chart.trim()}</code>
        </pre>
      ) : loading ? (
        <div className="flex min-h-[160px] flex-col items-center justify-center gap-2 p-8 text-foreground/60">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span className="font-heading text-base">Sketching diagram...</span>
        </div>
      ) : error ? (
        <div className="space-y-3">
          <div className="sketch-card bg-[var(--post-it)] p-3 text-sm text-foreground/80">
            Note: Diagram preview could not be generated. Displaying raw specification:
          </div>
          <pre className="overflow-x-auto rounded border border-foreground/20 bg-foreground/5 p-4 text-sm font-mono text-foreground">
            <code>{chart.trim()}</code>
          </pre>
        </div>
      ) : (
        <div
          className="overflow-x-auto p-2 flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svgContent || "" }}
        />
      )}
    </div>
  );
}
