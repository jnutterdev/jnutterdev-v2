import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const jakarta = readFileSync(join(__dirname, "fonts/jakarta-800.woff"));
const jbmono = readFileSync(join(__dirname, "fonts/jbmono-500.woff"));

const CARD_WIDTH = 1200;
const CARD_HEIGHT = 630;

function titleFontSize(title) {
  if (title.length <= 50) return 64;
  if (title.length <= 80) return 54;
  return 46;
}

export async function renderCard({ title, date, kicker }) {
  const markup = {
    type: "div",
    props: {
      style: {
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        display: "flex",
        padding: "28px",
        backgroundColor: "#101118",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              padding: "56px",
              borderRadius: "24px",
              border: "1px solid rgba(59,66,97,0.9)",
              backgroundImage:
                "radial-gradient(ellipse 110% 130% at 105% 110%, rgba(187,154,247,0.2) 0%, rgba(187,154,247,0) 65%), radial-gradient(ellipse 40% 50% at 0% 0%, rgba(122,162,247,0.08) 0%, rgba(122,162,247,0) 55%), linear-gradient(135deg, #1f2335 0%, #1a1b26 50%, #15161e 100%)",
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: "14px" },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { width: "28px", height: "1px", backgroundColor: "#a9b1d6" },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontFamily: "JetBrains Mono",
                          fontSize: "22px",
                          letterSpacing: "3px",
                          color: "#a9b1d6",
                          textTransform: "uppercase",
                        },
                        children: kicker,
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: `${titleFontSize(title)}px`,
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: "-2px",
                    color: "#c0caf5",
                    maxWidth: "940px",
                  },
                  children: title,
                },
              },
              {
                type: "div",
                props: {
                  style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontFamily: "JetBrains Mono",
                          fontSize: "20px",
                          letterSpacing: "1px",
                          color: "rgba(192,202,245,0.55)",
                          textTransform: "uppercase",
                        },
                        children: date,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          fontFamily: "Plus Jakarta Sans",
                          fontSize: "26px",
                          fontWeight: 800,
                          letterSpacing: "-1px",
                          color: "#c0caf5",
                        },
                        children: [
                          { type: "span", props: { children: "jnutter" } },
                          { type: "span", props: { style: { color: "#7aa2f7" }, children: ".dev" } },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(markup, {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    fonts: [
      { name: "Plus Jakarta Sans", data: jakarta, weight: 800, style: "normal" },
      { name: "JetBrains Mono", data: jbmono, weight: 500, style: "normal" },
    ],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: CARD_WIDTH } });
  return resvg.render().asPng();
}
