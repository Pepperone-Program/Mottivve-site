// TermsAndConditionsSection.tsx
import React from "react";
import Link from "next/link";

const TermsAndConditionsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <header className="text-center mb-10 md:mb-14">
          <h3 className="font-heading tracking-tight text-4xl md:text-5xl font-bold">
            Termos e condições
          </h3>
          <p className="mt-3 text-gray-600">
            Leia atentamente antes de utilizar o site.
          </p>
        </header>

        <div className="mx-auto w-full max-w-4xl">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
            {/* Conteúdo */}
            <div className="prose prose-gray max-w-none prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-semibold prose-a:text-purple-700 hover:prose-a:text-purple-900 prose-a:no-underline hover:prose-a:underline prose-ol:pl-6 prose-li:my-2 prose-p:leading-relaxed">
              <h2 className="text-lg text-gray-900 py-2">
                <span >1. Termos</span>
              </h2>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  Ao acessar ao site{" "}
                  <Link href="https://www.mottivve.com.br/">
                    Mottivve
                  </Link>
                  , concorda em cumprir estes termos de serviço, todas as leis e
                  regulamentos aplicáveis ​​e concorda que é responsável pelo
                  cumprimento de todas as leis locais aplicáveis. Se você não
                  concordar com algum desses termos, está proibido de usar ou
                  acessar este site. Os materiais contidos neste site são
                  protegidos pelas leis de direitos autorais e marcas comerciais
                  aplicáveis.
                </span>
              </p>

              <h2 className="text-lg text-gray-900 py-2">
                <span >2. Uso de Licença</span>
              </h2>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  É concedida permissão para baixar temporariamente uma cópia
                  dos materiais (informações ou software) no site Mottivve ,
                  apenas para visualização transitória pessoal e não comercial.
                  Esta é a concessão de uma licença, não uma transferência de
                  título e, sob esta licença, você não pode:&nbsp;
                </span>
              </p>

              <ol>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    modificar ou copiar os materiais;&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    usar os materiais para qualquer finalidade comercial ou para
                    exibição pública (comercial ou não comercial);&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    tentar descompilar ou fazer engenharia reversa de qualquer
                    software contido no site Mottivve;&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    remover quaisquer direitos autorais ou outras notações de
                    propriedade dos materiais; ou&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    transferir os materiais para outra pessoa ou &lsquo;espelhe&lsquo; os
                    materiais em qualquer outro servidor.
                  </span>
                </li>
              </ol>

              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  Esta licença será automaticamente rescindida se você violar
                  alguma dessas restrições e poderá ser rescindida por Mottivve
                  a qualquer momento. Ao encerrar a visualização desses materiais
                  ou após o término desta licença, você deve apagar todos os
                  materiais baixados em sua posse, seja em formato eletrónico ou
                  impresso.
                </span>
              </p>

              <h2 className="text-lg text-gray-900 py-2">
                <span >
                  3. Isenção de responsabilidade
                </span>
              </h2>
              <ol>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    Os materiais no site da Mottivve são fornecidos &lsquo;como estão&lsquo;.
                    Mottivve não oferece garantias, expressas ou implícitas, e,
                    por este meio, isenta e nega todas as outras garantias,
                    incluindo, sem limitação, garantias implícitas ou condições
                    de comercialização, adequação a um fim específico ou não
                    violação de propriedade intelectual ou outra violação de
                    direitos.
                  </span>
                </li>
                <li>
                  <span style={{ color: "rgb(68, 68, 68)" }}>
                    Além disso, o Mottivve não garante ou faz qualquer
                    representação relativa à precisão, aos resultados prováveis
                    ​​ou à confiabilidade do uso dos materiais em seu site ou de
                    outra forma relacionado a esses materiais ou em sites
                    vinculados a este site.
                  </span>
                </li>
              </ol>

              <h2 className="text-lg text-gray-900 py-2">
                <span >4. Limitações</span>
              </h2>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  Em nenhum caso o Mottivve ou seus fornecedores serão
                  responsáveis ​​por quaisquer danos (incluindo, sem limitação,
                  danos por perda de dados ou lucro ou devido a interrupção dos
                  negócios) decorrentes do uso ou da incapacidade de usar os
                  materiais em Mottivve, mesmo que Mottivve ou um representante
                  autorizado da Mottivve tenha sido notificado oralmente ou por
                  escrito da possibilidade de tais danos. Como algumas
                  jurisdições não permitem limitações em garantias implícitas, ou
                  limitações de responsabilidade por danos conseqüentes ou
                  incidentais, essas limitações podem não se aplicar a você.
                </span>
              </p>

              <h2 className="text-lg text-gray-900 py-2"> 
                <span >
                  5. Precisão dos materiais
                </span>
              </h2>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  Os materiais exibidos no site da Mottivve podem incluir erros
                  técnicos, tipográficos ou fotográficos. Mottivve não garante
                  que qualquer material em seu site seja preciso, completo ou
                  atual. Mottivve pode fazer alterações nos materiais contidos em
                  seu site a qualquer momento, sem aviso prévio. No entanto,
                  Mottivve não se compromete a atualizar os materiais.
                </span>
              </p>

              <h2 className="text-lg text-gray-900 py-2">
                <span >6. Links</span>
              </h2>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  O Mottivve não analisou todos os sites vinculados ao seu site e
                  não é responsável pelo conteúdo de nenhum site vinculado. A
                  inclusão de qualquer link não implica endosso por Mottivve do
                  site. O uso de qualquer site vinculado é por conta e risco do
                  usuário.
                </span>
              </p>

              <p>
                <br />
              </p>

              <h3>
                <span style={{ color: "rgb(68, 68, 68)" }}>Modificações</span>
              </h3>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  O Mottivve pode revisar estes termos de serviço do site a
                  qualquer momento, sem aviso prévio. Ao usar este site, você
                  concorda em ficar vinculado à versão atual desses termos de
                  serviço.
                </span>
              </p>

              <h3>
                <span style={{ color: "rgb(68, 68, 68)" }}>Lei aplicável</span>
              </h3>
              <p>
                <span style={{ color: "rgb(68, 68, 68)" }}>
                  Estes termos e condições são regidos e interpretados de acordo
                  com as leis do Mottivve e você se submete irrevogavelmente à
                  jurisdição exclusiva dos tribunais naquele estado ou
                  localidade.
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsSection;
