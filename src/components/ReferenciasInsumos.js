import React from "react";

/**
 * Referências de Insumos — versão estilizada e orientada a dados
 * - Tailwind CSS
 * - Sem dependências externas
 * - Conteúdo revisado (pt-BR) com linguagem clara e objetiva
 * - Sumário lateral fixo + âncoras
 * - Tabelas responsivas com rolagem horizontal
 */

const sections = [
  {
    id: "intro",
    title: "Tabela de Referência e Uso",
    kind: "intro",
    description:
      "Cada insumo pertence a um GRUPO e a um PLANO FINANCEIRO. Use esta tabela para padronizar lançamentos e evitar divergências. Sempre valide o plano financeiro que melhor representa o pedido de compra.",
    notes: [
      "Para serviços de engenharia, o insumo deve ser a descrição objetiva do serviço.",
      "Em locações, o nome do insumo deve iniciar com ‘LOCAÇÃO’ — se não houver, trata-se de aquisição.",
    ],
  },
  {
    id: "mao-obra",
    title: "Mão de Obra",
    tables: [
      {
        subtitle: "Serviços de Engenharia (descrição do serviço = insumo)",
        rows: [
          ["SERVIÇO DE SUPRESSÃO", "MÃO DE OBRA CONTRATADA", "SERVIÇO DE SUPRESSÃO"],
          ["SERVIÇO DE ESCAVAÇÃO", "MÃO DE OBRA CONTRATADA", "SERVIÇO DE ESCAVAÇÃO"],
          ["SERVIÇO DE TERRAPLANAGEM", "MÃO DE OBRA CONTRATADA", "SERVIÇO DE TERRAPLANAGEM"],
        ],
      },
      {
        subtitle: "Mão de Obra Contratada (CLT ou PJ)",
        caption: "Para funções operacionais/administrativas, utilize SALÁRIOS E ORDENADOS.",
        rows: [
          ["ASSISTENTE ADMINISTRATIVO", "MÃO DE OBRA CONTRATADA", "SALÁRIOS E ORDENADOS"],
          ["MONTADOR", "MÃO DE OBRA CONTRATADA", "SALÁRIOS E ORDENADOS"],
          ["ELETRICISTA", "MÃO DE OBRA CONTRATADA", "SALÁRIOS E ORDENADOS"],
        ],
      },
    ],
  },
  {
    id: "servicos-avulsos",
    title: "Serviços Avulsos (terceiros e freelancers)",
    description:
      "Serviços específicos contratados de terceiros. Não inclui frotas e fretes (há categoria própria).",
    tables: [
      {
        rows: [
          ["SERVIÇO DE REFRIGERAÇÃO", "MANUTENÇÕES EM GERAL", "MANUTENÇÕES, SERVIÇOS E OBRAS"],
          ["SERVIÇO DE INSTALAÇÃO DE CÂMERA", "MANUTENÇÕES EM GERAL", "MANUTENÇÕES, SERVIÇOS E OBRAS"],
          ["SERVIÇO DE MANUTENÇÃO AR-CONDICIONADO", "MANUTENÇÕES EM GERAL", "MANUTENÇÕES, SERVIÇOS E OBRAS"],
        ],
      },
    ],
  },
  {
    id: "alimentacao",
    title: "Alimentação",
    description: "Três cenários: Ticket, Despesas Gerais e Obra.",
    tables: [
      {
        subtitle: "Ticket",
        rows: [["TICKET ALIMENTAÇÃO FLASH", "ALIMENTAÇÃO", "TICKET ALIMENTAÇÃO"]],
      },
      {
        subtitle: "Despesas Gerais com Alimentação",
        caption:
          "Biscoitos, manteiga, bolo, refrigerante etc. — detalhar no campo de observações.",
        rows: [["DESPESAS COM ALIMENTAÇÃO", "ALIMENTAÇÃO", "ALIMENTAÇÃO — DESPESAS"]],
      },
      {
        subtitle: "Alimentação — Obra",
        rows: [["ALIMENTAÇÃO", "ALIMENTAÇÃO", "ALIMENTAÇÃO"]],
      },
    ],
  },
  {
    id: "mobilizacao",
    title: "Mobilização e Desmobilização",
    tables: [
      {
        subtitle: "Passagens",
        caption: "Detalhar no pedido se é aérea, ônibus, balsa etc.",
        rows: [
          ["PASSAGEM — BAIXADA", "Mobilização/Desmobilização Colaboradores", "PASSAGENS"],
          ["PASSAGEM — FÉRIAS", "Mobilização/Desmobilização Colaboradores", "PASSAGENS"],
          ["PASSAGEM — ADMISSIONAL", "Mobilização/Desmobilização Colaboradores", "PASSAGENS"],
          ["PASSAGEM — DEMISSIONAL", "Mobilização/Desmobilização Colaboradores", "PASSAGENS"],
          ["PASSAGEM — OPERACIONAL", "Mobilização/Desmobilização Colaboradores", "PASSAGENS"],
        ],
      },
      {
        subtitle: "Hospedagem",
        rows: [
          ["HOSPEDAGEM — BAIXADA", "Mobilização/Desmobilização Colaboradores", "HOSPEDAGEM"],
          ["HOSPEDAGEM — FÉRIAS", "Mobilização/Desmobilização Colaboradores", "HOSPEDAGEM"],
          ["HOSPEDAGEM — ADMISSIONAL", "Mobilização/Desmobilização Colaboradores", "HOSPEDAGEM"],
          ["HOSPEDAGEM — DEMISSIONAL", "Mobilização/Desmobilização Colaboradores", "HOSPEDAGEM"],
          ["HOSPEDAGEM — OPERACIONAL", "Mobilização/Desmobilização Colaboradores", "HOSPEDAGEM"],
        ],
      },
      {
        subtitle: "Despesas Simples",
        caption: "Táxi, Uber, alimentação, pedágio etc.",
        rows: [
          [
            "DESPESAS DE TRANSPORTE E VIAGENS — BAIXADA",
            "Mobilização/Desmobilização Colaboradores",
            "DESPESA MOB/DESMOB",
          ],
          [
            "DESPESAS DE TRANSPORTE E VIAGENS — FÉRIAS",
            "Mobilização/Desmobilização Colaboradores",
            "DESPESA MOB/DESMOB",
          ],
          [
            "DESPESAS DE TRANSPORTE E VIAGENS — ADMISSIONAL",
            "Mobilização/Desmobilização Colaboradores",
            "DESPESA MOB/DESMOB",
          ],
          [
            "DESPESAS DE TRANSPORTE E VIAGENS — DEMISSIONAL",
            "Mobilização/Desmobilização Colaboradores",
            "DESPESA MOB/DESMOB",
          ],
          [
            "DESPESAS DE TRANSPORTE E VIAGENS — OPERACIONAL",
            "Mobilização/Desmobilização Colaboradores",
            "DESPESA MOB/DESMOB",
          ],
        ],
      },
      {
        subtitle: "Exames Admissionais/Demissionais/Periódicos",
        rows: [
          ["EXAME ADMISSIONAL", "Medicina Ocupacional", "Exames admissionais/demissionais/periódicos"],
          ["EXAME DEMISSIONAL", "Medicina Ocupacional", "Exames admissionais/demissionais/periódicos"],
          ["EXAME PERIÓDICO", "Medicina Ocupacional", "Exames admissionais/demissionais/periódicos"],
        ],
      },
    ],
  },
  {
    id: "frotas",
    title: "Serviços de Frotas",
    tables: [
      {
        subtitle: "Serviços Gerais (detalhar tipo de serviço)",
        rows: [["SERVIÇOS", "Serviços de Manutenção Preventiva e Corretiva", "Serviços de Manutenção Preventiva e Corretiva"]],
      },
      {
        subtitle: "Ensaios e Laudos Mecânicos",
        caption: "Especificar o tipo de laudo nos detalhes.",
        rows: [["ENSAIOS E LAUDOS MECÂNICOS", "Ensaios e Laudos Mecânicos", "Ensaios e Laudos Mecânicos"]],
      },
    ],
  },
  {
    id: "locacoes",
    title: "Locação de Veículos e Equipamentos",
    description:
      "Para locações, o nome do insumo e o plano financeiro devem conter a palavra ‘LOCAÇÃO’. Caso contrário, é aquisição.",
    tables: [
      {
        subtitle: "Locações (equipamentos em geral)",
        rows: [
          ["LOCAÇÃO DE GUINDASTE", "Locação de Veículos e Equipamentos", "LOCAÇÃO DE GUINDASTE"],
          ["LOCAÇÃO DE BETONEIRA", "Locação de Veículos e Equipamentos", "LOCAÇÃO DE BETONEIRA"],
          ["LOCAÇÃO DE RETROESCAVADEIRA", "Locação de Veículos e Equipamentos", "LOCAÇÃO DE RETROESCAVADEIRA"],
        ],
      },
      {
        subtitle: "Locação de Veículos Leves",
        caption: "Descrever o veículo nos detalhes.",
        rows: [["LOCAÇÃO DE VEÍCULOS LEVES", "Locação de Veículos e Equipamentos", "LOCAÇÃO DE VEÍCULOS LEVES"]],
      },
      {
        subtitle: "Locação — Rádio e Comunicação",
        rows: [["LOCAÇÃO DE RÁDIO E COMUNICAÇÃO", "Locação de Equipamentos Leves e Ferramentas", "LOCAÇÃO DE RÁDIO E COMUNICAÇÃO"]],
      },
      {
        subtitle: "Locação — Banheiro Químico",
        rows: [["LOCAÇÃO DE BANHEIRO QUÍMICO", "Locação de Equipamentos Leves e Ferramentas", "Locação Equipamentos Leves e Ferramentas Elétricas"]],
      },
      {
        subtitle: "Locação — Container",
        rows: [["LOCAÇÃO DE CONTAINER", "LOCAÇÃO DE CONTAINER", "LOCAÇÃO DE CONTAINER"]],
      },
      {
        subtitle: "Locação — Equipamentos Leves e Ferramentas Elétricas",
        rows: [
          ["LOCAÇÃO DE TERRÔMETRO DIGITAL", "Locação Equipamentos Leves e Ferramentas Elétricas", "Locação Equipamentos Leves e Ferramentas Elétricas"],
          ["LOCAÇÃO DE FURADEIRA DE IMPACTO", "Locação Equipamentos Leves e Ferramentas Elétricas", "Locação Equipamentos Leves e Ferramentas Elétricas"],
          ["LOCAÇÃO DE GERADOR", "Locação Equipamentos Leves e Ferramentas Elétricas", "Locação Equipamentos Leves e Ferramentas Elétricas"],
        ],
      },
    ],
  },
  {
    id: "outras-locacoes",
    title: "Outras Locações",
    tables: [
      {
        rows: [
          ["ALUGUEL PARA ALOJAMENTO", "ALUGUÉIS", "ALUGUÉIS"],
          ["ALUGUEL DE GALPÃO", "ALUGUÉIS", "ALUGUÉIS"],
          ["LOCAÇÃO DE IMÓVEL", "ALUGUÉIS", "ALUGUÉIS"],
          ["ALUGUEL DE TERRENO", "ALUGUÉIS", "ALUGUÉIS"],
        ],
      },
    ],
  },
  { id: "energia", title: "Energia Elétrica", tables: [{ rows: [["ENERGIA ELÉTRICA", "ENERGIA ELÉTRICA", "ENERGIA ELÉTRICA"]] }] },
  { id: "agua", title: "Consumo de Água", tables: [{ rows: [["CONSUMO DE ÁGUA", "CONSUMO DE ÁGUA", "CONSUMO DE ÁGUA"]] }] },
  { id: "pneu", title: "Pneu", tables: [{ rows: [["PNEU", "PEÇAS E COMPONENTES", "PNEU"]] }] },
  {
    id: "telefone",
    title: "Despesas com Telefone",
    tables: [{ rows: [["DESPESAS COM TELEFONE", "DESPESAS COM TELEFONE", "DESPESAS COM TELEFONE"]] }],
  },
  {
    id: "reembolso",
    title: "Reembolso / Suprimentos",
    tables: [
      { rows: [["REEMBOLSO", "VERBAS, TAXAS E IMPOSTOS", "REEMBOLSO"]] },
      { subtitle: "Abastecimento Ticket Log+", rows: [["ABASTECIMENTO TICKET LOG", "ABASTECIMENTO", "ABASTECIMENTO"]] },
      { subtitle: "Verba para suprimento de caixa", rows: [["VERBA PARA SUPRIMENTO DE CAIXA", "VERBAS, TAXAS E IMPOSTOS", "VERBA SUPRIMENTO DE CAIXA"]] },
    ],
  },
  {
    id: "aquisoes",
    title: "Aquisições de Equipamentos e Materiais",
    description:
      "Compras de bens duráveis (ferramentas elétricas, eletrodomésticos, patrimônio). Pertencem ao grupo e plano de sua natureza.",
    tables: [
      {
        rows: [
          ["FURADEIRA", "FERRAMENTAS ELÉTRICAS", "FERRAMENTAS ELÉTRICAS"],
          ["MOTOSSERRA", "FERRAMENTAS ELÉTRICAS", "FERRAMENTAS ELÉTRICAS"],
          ["NOTEBOOK", "EQUIPAMENTOS DE TI", "EQUIPAMENTOS DE TI"],
          ["FOGÃO", "ELETRODOMÉSTICOS", "ELETRODOMÉSTICOS"],
          ["CAMA", "MÓVEIS E MOBÍLIA", "MÓVEIS E MOBÍLIA"],
          ["RETROESCAVADEIRA", "EQUIPAMENTOS PRÓPRIOS", "EQUIPAMENTOS PRÓPRIOS"],
        ],
      },
    ],
    footer:
      "Exemplo: se fosse locação, o insumo seria ‘LOCAÇÃO DE RETROESCAVADEIRA’ e o plano ‘LOCAÇÃO DE RETROESCAVADEIRA’.",
  },
];

const H = ({ level = 2, children, id }) => {
  const Tag = `h${level}`;
  return (
    <Tag id={id} className="scroll-mt-28 font-extrabold tracking-tight text-slate-900 text-2xl md:text-3xl">
      {children}
    </Tag>
  );
};

const Card = ({ children }) => (
  <div className="bg-white/90 backdrop-blur shadow-sm ring-1 ring-slate-200 rounded-2xl p-5 md:p-7">
    {children}
  </div>
);

const Table = ({ rows, caption }) => (
  <div className="mt-3 overflow-x-auto rounded-xl ring-1 ring-slate-200">
    <table className="min-w-full text-sm">
      {caption && (
        <caption className="text-left px-4 py-3 text-slate-600">{caption}</caption>
      )}
      <thead className="bg-slate-50">
        <tr>
          {['INSUMO', 'GRUPO DE INSUMO', 'PLANO FINANCEIRO'].map((h) => (
            <th key={h} className="px-4 py-3 text-left font-semibold text-slate-700 whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="odd:bg-white even:bg-slate-50/60">
            {r.map((c, j) => (
              <td key={j} className="px-4 py-3 align-top text-slate-800 whitespace-pre-wrap">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Sidebar = () => (
  <nav className="sticky top-24 hidden lg:block w-64 pr-6">
    <div className="text-xs font-semibold tracking-wider text-slate-500 mb-2">SUMÁRIO</div>
    <ul className="space-y-2">
      {sections
        .filter((s) => s.id !== 'intro')
        .map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="block rounded-lg px-3 py-2 hover:bg-emerald-50 hover:text-emerald-700 transition"
            >
              {s.title}
            </a>
          </li>
        ))}
    </ul>
  </nav>
);

export default function ReferenciasInsumos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
      {/* Header */}
      <header className="bg-[#121c3f] text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight">Tabela de Referência e Uso</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Guia visual para escolher corretamente o <span className="font-semibold">GRUPO</span> e o
            <span className="font-semibold"> PLANO FINANCEIRO</span> de cada insumo.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,3fr)] gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <section key={section.id} id={section.id}>
              {idx === 0 ? (
                <Card>
                  <H level={2}>{section.title}</H>
                  <p className="mt-3 text-slate-700">{section.description}</p>
                  {section.notes && (
                    <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-1">
                      {section.notes.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              ) : (
                <div className="space-y-4">
                  <H id={section.id}>{section.title}</H>
                  {section.description && (
                    <p className="text-slate-700">{section.description}</p>
                  )}

                  {section.tables?.map((t, i) => (
                    <Card key={i}>
                      {t.subtitle && (
                        <h3 className="font-bold text-lg text-slate-900">{t.subtitle}</h3>
                      )}
                      <Table rows={t.rows} caption={t.caption} />
                      {section.footer && i === section.tables.length - 1 && (
                        <p className="mt-4 text-slate-700">{section.footer}</p>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Callout */}
          <Card>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div>
                <p className="font-semibold text-slate-900">Dica rápida</p>
                <p className="text-slate-700 mt-1">
                  Sempre que houver dúvida, priorize a fidelidade do plano financeiro ao evento econômico.
                  Em locações, não esqueça de iniciar o insumo por <span className="font-semibold">LOCAÇÃO</span>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} — Tabela de Referência e Uso
        </div>
      </footer>

      <style>{`
        /* Melhorias de impressão */
        @media print {
          nav { display: none; }
          header { color: #000; background: #fff !important; }
          .bg-white\/90, .bg-white\/70 { background: #fff !important; }
          .ring-slate-200 { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
