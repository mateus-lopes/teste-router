<script setup>
import Navbar_comp from "../components/navbar/navbar_comp.vue";
import Footer from "../components/footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const logged = $cookies.get("logged");
if (!logged) {
  router.push("/login");
}
</script>

<template>
  <main class="pt-14 md:pt-24">
    <header class="fixed top-0 left-0 right-0 z-20">
      <Navbar_comp />
    </header>
    <section class="px-10 lg:px-32 py-3 mt-10 flex-col justify-center">
      <h1 class="text-4xl pb-5 text-left">Pagina de Ajuda</h1>
      <hr>
      <div class="lowercase pt-5">
        <div><span style="font-size:20px !important" class="uppercase"><strong>1. Perguntas Frequentes</strong></span></div>
        <div>&nbsp;</div>
        <div>1.1. Para efeitos do presente instrumento, todas as palavras e express&otilde;es constantes da lista abaixo, dever&atilde;o ser entendidas conforme o respectivo s     ignificado:</div>
        <div>&nbsp;</div>
        <div>1.1.1.&nbsp;<strong>USU&Aacute;RIO:</strong>&nbsp;&Eacute; a pessoa f&iacute;sica respons&aacute;vel pela gest&atilde;o do cadastro e pela utiliza&ccedil;&atilde;o em nome estabelecimento empresarial que deseja gerenciar seus dados a partir do uso do servi&ccedil;o oferecido pel      o SOFTWARE.</div>
        <div>&nbsp;</div>
        <div>1.1.2.&nbsp;<strong>SOFTWARE:</strong>&nbsp;&Eacute; a ferramenta denominada &ldquo;MADU&rdquo;, que possibilita que o USU&Aacute;RIO gerencie seus dados de recurso humanos e administrativos, por seus pr&oacute;prios crit&eacute;rios e necessidades, seguindo as configura&ccedil;&otilde;es definidas pelo USU&Aacute;RIO. De acordo com a Lei n&ordm;. 9609/98 trata-se da express&atilde;o de um conjunto organizado de instru&ccedil;&otilde;es em linguagem natural ou codificado, contido em suporte f&iacute;sico de qualquer natureza, de emprego necess&aacute;rio em m&aacute;quinas autom&aacute;ticas de tratamento da informa&ccedil;&atilde;o, dispositivos, instrumentos ou equipamentos perif&eacute;ricos, baseados em t&eacute;cnica digital ou an&aacute;loga, para faz&ecirc;-los funcionar de modo e para fins determinados. Neste Contrato, SOFTWARE dir&aacute; respeito ao programa de computador de PROPRIEDADE da METADADOS devidamente       licenciado.</div>
        <div>&nbsp;</div>
        <div>1.1.3.&nbsp;<strong>INFORMA&Ccedil;&Otilde;ES DE CONTA:</strong>&nbsp;Tratam-se das informa&ccedil;&otilde;es e dados relativos aos colaboradores, ao estabelecimento empresarial, incluindo logins, senhas e demais informa&ccedil;&otilde;es necess&aacute;rias para acessar, coletar, armazenar e tratar as informa&ccedil;&otilde;es obtidas pel     o SOFTWARE.</div>
        <div>&nbsp;</div>
        <div>1.1.4.&nbsp;<strong>INFORMA&Ccedil;&Otilde;ES PESSOAIS:</strong>&nbsp;Trata-se de qualquer informa&ccedil;&atilde;o disponibilizada pelo Usu&aacute;rio que o identifique ou ao estabelecimento empresarial que representa, tais como nome, endere&ccedil;o, telefone, e-mail, n&uacute;mero de docum      entos, etc.</div>
        <div>&nbsp;</div>
        <div>1.1.5.&nbsp;<strong>INFRAESTRUTURA:</strong>&nbsp;Trata-se do equipamento de armazenagem do SOFTWARE e do banco de dados utilizado por este, incluindo-se o servidor e demais equipamentos necess&a      acute;rios.</div>
        <div>&nbsp;</div>
        <div>1.1.6.&nbsp;<strong>IMPLANTA&Ccedil;&Atilde;O:</strong>&nbsp;Entenda-se como capacitar o usu&aacute;rio-chave do estabelecimento empresarial contratante, para a perfeita e correta utiliza&ccedil;&atilde;o do sistema, com o uso de um a base de dados      de testes.</div>
        <div>&nbsp;</div>
        <div>1.1.7.&nbsp;<strong>PESSOAL HABILITADO:</strong>&nbsp;Tratam-se dos colaboradores do estabelecimento empresarial contratante, que possuem no&ccedil;&otilde;es b&aacute;sicas de inform&aacute;tica, conhecem o processo produtivo da mesma e tenham recebido treinamento operacional do SOFTWARE, estando, portanto, certificadas pela METADADOS a oper&aacute;-lo da melhor forma para obter os resultados a que o SOFTWARE      se destina.</div>
        <div>&nbsp;</div>
        <div>1.1.8.&nbsp;<strong>MELHORIAS (UPGRADES)</strong>: Significam altera&ccedil;&otilde;es no SOFTWARE que melhoram seu desempenho e operacionalidade ou que incluam novas funci     onalidades.</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div><span style="font-size:20px !important" class="uppercase"><strong>2. Termos de Uso</strong></span></div>
        <div>&nbsp;</div>
        <div>2.1. O objeto deste contrato &eacute; o estabelecimento das condi&ccedil;&otilde;es de uso do SOFTWARE da METADADOS, de forma n&atilde;o exclusiva e intransfer&iacute;vel, na forma &ldquo;as a service&rdquo;, que proporciona ao USU&Aacute;RIO o gerenciamento online de informa&ccedil;&otilde;es empresariais, especialmente &agrave;s vinculadas com as atividades de gest&atilde;o de sa&uacute;de o     cupacional.</div>
        <div>&nbsp;</div>
        <div>2.1.1. O objeto contratado n&atilde;o inclui, de forma alguma, acesso &agrave; Internet e infraestrutura local no usu&aacute;rio. Desta forma, ser&aacute; de integral e exclusiva responsabilidade do Usu&aacute;rio obter, de forma independente e &agrave;s suas custas, o equipamento, softwares e os servi&ccedil;os necess&aacute;rios para garantir sua conex&atilde;o &agrave; Internet e ao SOFTWARE que proporciona acesso aos Servi     &ccedil;os.</div>
        <div>&nbsp;</div>
        <div>2.1.2. A METADADOS poder&aacute; incluir links que remetam a p&aacute;ginas de Internet, conte&uacute;dos ou recursos de terceiros, os quais n&atilde;o est&atilde;o sob controle da METADADOS.&nbsp;<strong>Em raz&atilde;o disto, o Usu&aacute;rio reconhece e concorda expressamente que esta n&atilde;o ter&aacute; qualquer responsabilidade sobre referidas p&aacute;ginas, conte&uacute;dos ou recurso      s.</strong></div>
        <div>&nbsp;</div>
        <div>2.2. Qualquer pessoa que pretenda utilizar os servi&ccedil;os do site dever&aacute; aceitar estes Termos e as demais pol&iacute;ticas eventualmente dispon     ibilizadas.</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div><strong>3. CAPACIDADE PARA CONTRATAR E DO CADASTRO</strong></div>
        <div>&nbsp;</div>
        <div>3.1. Para utilizar o SOFTWARE &eacute; necess&aacute;ria a realiza&ccedil;&atilde;o de um cadastro pr&eacute;vio, no qual o Usu&aacute;rio deve informar um e-mail v&aacute;lido, que ser&aacute; confirmado na sequ&ecirc;ncia por meio do envio de um e-mail autom&aacute;tico, bem como demais dados      requeridos.</div>
        <div>&nbsp;</div>
        <div>3.2. O Usu&aacute;rio dever&aacute; ter, no m&iacute;nimo, 18 (dezoito) anos de idade completos, capacidade civil e declarar e garantir que as informa&ccedil;&otilde;es prestadas s&atilde;o verdadeiras e que leu, compreendeu, concordou e est&aacute; integralmente de acordo com o disposto n     este Termo.</div>
        <div>&nbsp;</div>
        <div>3.3. O USU&Aacute;RIO declara que &eacute; respons&aacute;vel legal e/ou possui autoriza&ccedil;&atilde;o para realizar a gest&atilde;o de sa&uacute;de ocupacional pel      o SOFTWARE.</div>
        <div>&nbsp;</div>
        <div>3.4. Quando solicitado, o Usu&aacute;rio concorda em fornecer informa&ccedil;&otilde;es verdadeiras, corretas, atualizadas e completas (os &ldquo;Dados de Cadastro&rdquo;), conforme solicitados no formato de cadastro disponibilizado, sob pena de responsabiliza&ccedil;&atilde;o nos termos da legisla&ccedil;&atilde;o aplic&aacute;v      el vigente.</div>
        <div>&nbsp;</div>
        <div>3.5. A METADADOS depender&aacute; dos seus dados de Cadastro para avaliar sua situa&ccedil;&atilde;o de neg&oacute;cio, para fornecer informa&ccedil;&atilde;o sobre os servi&ccedil;os, ou, alternativamente, para identificar e/ou entrar em contato com o usu&aacute;rio.&nbsp;<strong>Se os Dados de Cadastro n&atilde;o forem verdadeiros e corretos, ou estiverem desatualizados e incompletos, a METADADOS poder&aacute; encerrar o licenciamento e todos os usos correntes ou futuros dos Servi&ccedil;os, respeitando o Contrato de Licenciamento firmado entre as parte      s.</strong></div>
        <div>&nbsp;</div>
        <div>3.6. O Usu&aacute;rio receber&aacute; uma senha e designa&ccedil;&atilde;o de conta no momento em que completar o processo de cadastro, sendo certo que tais dados s&atilde;o pessoais e intransfer&iacute;veis (os &ldquo;Dados de Acesso&rdquo;). O Usu&aacute;rio &eacute; o &uacute;nico e exclusivo respons&aacute;vel por manter a confidencialidade de tais dados, bem como por todas as atividades que ocorrerem mediante o emprego de seus Dados       de Acesso.</div>
        <div>&nbsp;</div>
        <div>3.6.1. Neste sentido, o Usu&aacute;rio o     briga-se a:</div>
        <div>&nbsp;</div>
        <div><strong>(i)</strong>&nbsp;notificar imediatamente a METADADOS de qualquer uso n&atilde;o autorizado de seus Dados de Acesso ou qualquer outra viola&ccedil;&atilde;o de seguran&ccedil;a, incluindo, mas n&atilde;o se limitando, o extravio, perda ou roubo de seus Dados d     e Acesso; e</div>
        <div>&nbsp;</div>
        <div><strong>(ii)</strong>&nbsp;efetuar logout em sua conta ao final de cada sess&atilde;o de utiliza&ccedil      ;&atilde;o.</div>
        <div>&nbsp;</div>
        <div><strong>(iii)</strong>&nbsp;notificar a METADADOS sobre desligamentos de usu&aacute;rios d     o SOFTWARE.</div>
        <div>&nbsp;</div>
        <div><strong>(iv)</strong>&nbsp;manter os dados dos usu&aacute;rios do SOFTWARE a     tualizados.</div>
        <div>&nbsp;</div>
        <div>3.6.2. A METADADOS n&atilde;o ser&aacute; respons&aacute;vel por qualquer perda ou dano decorrente da sua falha em cumprir ao que estabelece esta se&ccedil      ;&atilde;o.</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div><strong>4. DA RESPONSABILIDADE DE INSER&Ccedil;&Atilde;O E DA GEST&Atilde;O DOS DADOS NO SOFTWARE</strong></div>
        <div>&nbsp;</div>
        <div>4.1. Da responsabilidade quanto aos dados disponibilizados e do uso d      o SOFTWARE:</div>
        <div>&nbsp;</div>
        <div>4.1.1. O Usu&aacute;rio est&aacute; ciente de que todas as informa&ccedil;&otilde;es e dados s&atilde;o inseridos, produzidos e disponibilizados sob sua responsabilidade, sem que haja qualquer tipo de modifica&ccedil;&atilde;o ou cria&ccedil;&atilde;o por parte do SOFTWARE, que n&atilde;o cria, n&atilde;o edita, e n&atilde;o &eacute;, de qualquer forma, respons&aacute;vel pelo conte&uacute;do das informa&ccedil;&otilde;es e dados introduzidos no sistema, na medida em que o servi&ccedil;o prestado restringe-se &agrave; disponibiliza&ccedil;&atilde;o de um software de facilita&ccedil;&atilde;o do gerenciamento dos dados do USU&      Aacute;RIO.</div>
        <div>&nbsp;</div>
        <div>4.1.2. O USU&Aacute;RIO concorda que &eacute; respons&aacute;vel pelas defini&ccedil;&otilde;es do SOFTWARE, por seus pr&oacute;prios crit&eacute;rios, interesses e ne      cessidades.</div>
        <div>&nbsp;</div>
        <div><strong>4.3. A METADADOS n&atilde;o se responsabiliza pela exist&ecirc;ncia, quantidade, qualidade, estado, integridade ou legitimidade dos dados, conte&uacute;dos e informa&ccedil;&otilde;es inseridas pelo USU&Aacute;RIO, na medida em que n&atilde;o realiza qualquer controle quanto ao uso dos dados, restringindo-se a garantir o funcionamento do sistem     a.</strong></div>
        <div>&nbsp;</div>
        <div><strong>4.4. Em nenhum caso a METADADOS ser&aacute; respons&aacute;vel pelo lucro cessante ou por qualquer outro dano e/ou preju&iacute;zo que o USU&Aacute;RIO possa sofrer devido &agrave;s configura&ccedil;&otilde;es estabelecidas no SOFTWAR     E.</strong></div>
        <div>&nbsp;</div>
        <div><strong>4.5. A responsabilidade pelos servi&ccedil;os prestados restringe-se &agrave; disponibiliza&ccedil;&atilde;o de um software de gest&atilde;o da sa&uacute;de ocupacional, bem como &agrave; presta&ccedil;&atilde;o de suporte t&eacute;cnico e resolu&ccedil;&atilde;o de problemas, se necess&aacute;rio e em conformidade com o Contrato de Licenciament      o.</strong></div>
        <div>&nbsp;</div>
        <div>4.6. A METADADOS n&atilde;o se responsabiliza pelo servi&ccedil;o de instala&ccedil;&atilde;o de seus aplicativos em dispositivos m&oacute;veis do USU&      Aacute;RIO.</div>
        <div>&nbsp;</div>
        <div>4.7. A METADADOS n&atilde;o se responsabiliza por eventuais erros e/ou falhas apresentadas pelo SOFTWARE que tenham por causa problemas nos computadores, dispositivos m&oacute;veis ou na rede utilizada pelo Usu&aacute;rio, sendo certo que, nesses casos, o Usu&aacute;rio assume toda a responsabilidade pelo erro e/ou falha a     presentada.</div>
        <div>&nbsp;</div>
        <div>4.8. O USU&Aacute;RIO &eacute; respons&aacute;vel por toda a atividade que ocorrer em sua conta de acesso aos servi      &ccedil;os.</div>
        <div>&nbsp;</div>
        <div><strong>4.9. O Usu&aacute;rio &eacute; exclusivamente respons&aacute;vel pelo cumprimento de todas as leis aplic&aacute;veis ao seu neg&oacute;cio, incluindo leis e regulamentos, e quaisquer licen&ccedil;as ou contratos a que estiver obrigad      o.</strong></div>
        <div>&nbsp;</div>
        <div>4.10. O Usu&aacute;rio garante que seus arquivos est&atilde;o livres de quaisquer malware, v&iacute;rus, cavalos de Troia, spyware, vermes, ou outro c&oacute;digo malicioso      ou danoso.</div>
        <div>&nbsp;</div>
        <div>4.11. O Usu&aacute;rio se responsabiliza ​​por: (a) manter a confidencialidade da senha e das Contas de Administrador; (b) designar quem est&aacute; autorizado a acessar as Contas de Administrador e (c) assegurar que todas as atividades que ocorrerem em conex&atilde;o com as Contas de Administrador cumpram os direitos e deveres contidos nes     tes Termos.</div>
        <div>&nbsp;</div>
        <div><strong>4.12. O Usu&aacute;rio concorda que a emiss&atilde;o de documentos eletr&ocirc;nicos &eacute; de sua inteira e exclusiva responsabilidade, na medida em que feita a partir de configura&ccedil;&otilde;es que s&atilde;o de responsabilidade do Usu&aacute;rio, sob os seus exclusivos crit&eacute;rios, interesses e necessidades, sendo certo que o SOFTWARE n&atilde;o realiza confer&ecirc;ncia aos dados lan&ccedil;ados no sistem      a.</strong></div>
        <div>&nbsp;</div>
        <div>4.13. A METADADOS garante ao Usu&aacute;rio que o software dever&aacute; funcionar regularmente, se respeitadas as condi&ccedil;&otilde;es de uso definidas na documenta&ccedil;&atilde;o. Na ocorr&ecirc;ncia de falhas de programa&ccedil;&atilde;o (&ldquo;bugs&rdquo;), a METADADOS obrigar-se-&aacute; a corrigir tais falhas, podendo a seu crit&eacute;rio substituir a c&oacute;pia dos Programas com falhas por c&oacute;pias       corrigidas.</div>
        <div>&nbsp;</div>
        <div>4.14. A METADADOS responsabiliza-se por manter as INFORMA&Ccedil;&Otilde;ES DE CONTA, INFORMA&Ccedil;&Otilde;ES ADMINISTRATIVAS e INFORMA&Ccedil;&Otilde;ES PESSOAIS do Usu&aacute;rio, bem como seus registros de acesso, em sigilo, sendo que as referidas INFORMA&Ccedil;&Otilde;ES ser&atilde;o armazenadas em ambiente seguro, sendo respeitadas a intimidade, a vida privada, a honra e a imagem do Usu&aacute;rio, em conformidade com as disposi&ccedil;&otilde;es da Lei n&ordm; 12.965/2014 e com a Pol&iacute;tica de P     rivacidade.</div>
        <div>&nbsp;</div>
        <div>4.15. Exceto no caso de conduta dolosa comprovada, em nenhum momento a METADADOS ser&aacute; respons&aacute;vel por perda ou dano de qualquer natureza que surja como resultado de uso do SOFTWARE ou qualquer outra informa&ccedil;&atilde;o, dados, ou servi&ccedil;o fornecido atrav&eacute;s desta Infraestrutura.&nbsp;<strong>A responsabilidade total e cumulativa da METADADOS com o Usu&aacute;rio, em nenhuma circunst&acirc;ncia, ser&aacute; maior que R$ 1.000 (mil reais     ).</strong></div>
        <div>&nbsp;</div>
        <div>4.16. Em nenhuma hip&oacute;tese a METADADOS ser&aacute; respons&aacute;vel por quaisquer danos indiretos, de qualquer natureza, que possam, direta ou indiretamente, ser atribu&iacute;veis ao uso, ou &agrave; incapacidade de uso do SaaS ou servi&ccedil;o prestado atrav&eacute;s da Infraestrutura, mesmo se advertido sobre a possibilidade de tais danos ou se tais danos eram previs&i      acute;veis.</div>
        <div>&nbsp;</div>
        <div>4.17. A METADADOS n&atilde;o &eacute; respons&aacute;vel perante o usu&aacute;rio por qualquer atraso ou n&atilde;o execu&ccedil;&atilde;o do SOFTWARE, ou falha em acessar a Infraestrutura, decorrente de qualquer causa al&eacute;m do razo&aacute;ve     l controle.</div>
        <div>&nbsp;</div>
        <div>4.18. O Usu&aacute;rio &eacute; respons&aacute;vel por todas as obriga&ccedil;&otilde;es perante terceiros decorrentes da utiliza&ccedil;&atilde;o do SOFTWARE, incluindo contratuais, trabalhistas, tribut&aacute;rios e passivos regulat&o     acute;rios.</div>
        <div>&nbsp;</div>
        <div>4.19. A METADADOS n&atilde;o garante que o SOFTWARE ser&aacute; ininterrupto ou livre de erros, que defeitos ser&atilde;o corrigidos ou que o servidor em que ele &eacute; disponibilizado ou qualquer sistema conectado a ele est&aacute; livre de v&iacute;rus ou outros component     es nocivos.</div>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>
