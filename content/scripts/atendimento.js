/* Conteúdo operacional dos scripts de atendimento. */
window.CENTRAL_ATENDIMENTO_HTML = String.raw`
<div class="script-card" data-categoria="Atendimento"><span class="categoria">Atendimento</span><div class="script-header"><span class="script-title">Abertura</span><button class="btn-copiar" onclick="copiarTexto(this,'s1')">Copiar</button></div><div class="script-content" id="s1">Olá! Sou o operador responsável por este atendimento.
Como posso ajudar?</div></div>
<div class="script-card" data-categoria="Atendimento"><span class="categoria">Atendimento</span><div class="script-header"><span class="script-title">Transferir para outra fila</span><button class="btn-copiar" onclick="copiarTexto(this,'s2')">Copiar</button></div><div class="script-content" id="s2">Sua solicitação foi recusada devido à falta de algumas informações.

Mas não se preocupe, vou te encaminhar para o setor que vai te ajudar com o caso. Aguarde um instante aqui.</div></div>
<div class="script-card" data-categoria="Protocolo"><span class="categoria">Protocolo</span><div class="script-header"><span class="script-title">Solicitando o Protocolo/ID — Opção 1</span><button class="btn-copiar" onclick="copiarTexto(this,'s3')">Copiar</button></div><div class="script-content" id="s3">Você já realizou o registro de algum formulário sobre o caso?</div></div>
<div class="script-card" data-categoria="Protocolo"><span class="categoria">Protocolo</span><div class="script-header"><span class="script-title">Solicitando o Protocolo/ID — Opção 2</span><button class="btn-copiar" onclick="copiarTexto(this,'s4')">Copiar</button></div><div class="script-content" id="s4">Me informe, por gentileza, o número do protocolo, que você recebeu por e-mail.</div></div>
<div class="script-card" data-categoria="Encerramento"><span class="categoria">Encerramento</span><div class="script-header"><span class="script-title">Verificando se deu tudo certo</span><button class="btn-copiar" onclick="copiarTexto(this,'s5')">Copiar</button></div><div class="script-content" id="s5">Ficou mais alguma dúvida por aí?

Se estiver tudo certo, deixa uma avaliação sobre o meu atendimento antes de fechar? Seu feedback me ajuda demais!</div></div>
<div class="script-card" data-categoria="Tempo de espera"><span class="categoria">Tempo de espera</span><div class="script-header"><span class="script-title">Solicitando um momento</span><button class="btn-copiar" onclick="copiarTexto(this,'s6')">Copiar</button></div><div class="script-content" id="s6">Obrigado
Um momento, enquanto verifico essa informação no sistema.</div></div>
<div class="script-card" data-categoria="Atendimento"><span class="categoria">Atendimento</span><div class="script-header"><span class="script-title">Manda áudio</span><button class="btn-copiar" onclick="copiarTexto(this,'s7')">Copiar</button></div><div class="script-content" id="s7">Desculpe, mas o recurso de áudio não está disponível no momento, poderia escrever?</div></div>
<div class="script-card" data-categoria="Segurança"><span class="categoria">Segurança</span><div class="script-header"><span class="script-title">Fraude</span><button class="btn-copiar" onclick="copiarTexto(this,'s8')">Copiar</button></div><div class="script-content" id="s8">Afim de assegurar e garantir a segurança dos dados solicitados, poderia me encaminhar uma foto segurando o seu documento?</div></div>
<div class="script-card" data-categoria="Tempo de espera"><span class="categoria">Tempo de espera</span><div class="script-header"><span class="script-title">Agradecendo por aguardar</span><button class="btn-copiar" onclick="copiarTexto(this,'s9')">Copiar</button></div><div class="script-content" id="s9">Agradeço a espera.
Desculpe a demora, o sistema está apresentando lentidão</div></div>
<div class="script-card" data-categoria="Pesquisa"><span class="categoria">Pesquisa</span><div class="script-header"><span class="script-title">Pesquisa de satisfação — Tarde</span><button class="btn-copiar" onclick="copiarTexto(this,'s10')">Copiar</button></div><div class="script-content" id="s10">Obrigado por entrar em contato conosco. Se precisar de mais ajuda, estamos à sua disposição. Peço que, por gentileza, avalie o meu atendimento, sendo 10 a nota máxima.
Tenha uma ótima Tarde!</div></div>
<div class="script-card" data-categoria="Pesquisa"><span class="categoria">Pesquisa</span><div class="script-header"><span class="script-title">Pesquisa de satisfação — Noite</span><button class="btn-copiar" onclick="copiarTexto(this,'s11')">Copiar</button></div><div class="script-content" id="s11">Obrigado por entrar em contato conosco. Se precisar de mais ajuda, estamos à sua disposição. Peço que, por gentileza, avalie o meu atendimento, sendo 10 a nota máxima.
Tenha uma ótima Noite!</div></div>
<div class="script-card" data-categoria="Gov.br"><span class="categoria">Gov.br</span><div class="script-header"><span class="script-title">2FA Desabilitado</span><button class="btn-copiar" onclick="copiarTexto(this,'s12')">Copiar</button></div><div class="script-content" id="s12">- (Nome do usuário), a verificação em duas etapas da sua conta foi desabilitada. Agora você conseguirá acessar sua conta gov.br sem a necessidade do código.

Por questões de segurança, o nível da conta foi reduzido para Bronze. Recomendamos que aumente o nível da conta seguindo as orientações disponíveis nessa página

https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/duvidas-para-aumentar-o-nivel-da-conta-gov.br</div></div>
<div class="script-card" data-categoria="Gov.br"><span class="categoria">Gov.br</span><div class="script-header"><span class="script-title">E-mail Alterado</span><button class="btn-copiar" onclick="copiarTexto(this,'s13')">Copiar</button></div><div class="script-content" id="s13">- (Nome do usuário), sua solicitação foi aceita e o e-mail da sua conta gov.br foi alterado com sucesso. Agora você conseguirá recuperar sua senha pelo e-mail cadastrado.

Por questões de segurança, o nível da conta foi reduzido para Bronze. Recomendamos que aumente o nível da conta seguindo as orientações disponíveis nessa página

https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/duvidas-para-aumentar-o-nivel-da-conta-gov.br</div></div>
<div class="script-card" data-categoria="Chamados"><span class="categoria">Chamados</span><div class="script-header"><span class="script-title">Por no chamado — Informações corretas</span><button class="btn-copiar" onclick="copiarTexto(this,'s14')">Copiar</button></div><div class="script-content" id="s14">Atendimento realizado por chat, em anexo informações corretas.</div></div>
<div class="script-card" data-categoria="Chamados"><span class="categoria">Chamados</span><div class="script-header"><span class="script-title">Por no chamado — Complemento de dados</span><button class="btn-copiar" onclick="copiarTexto(this,'s15')">Copiar</button></div><div class="script-content" id="s15">Atendimento realizado por chat, através do protocolo de complemento de dados</div></div>
<div class="script-card" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Recusa a mandar documento correto</span><button class="btn-copiar" onclick="copiarTexto(this,'s16')">Copiar</button></div><div class="script-content" id="s16">Infelizmente o arquivo que me enviou não pode ser validado em sistema. Sem a documentação correta fica inviável seguir no momento com a sua solicitação.

Eu recomendo que você entre em contato, em outro momento, com a documentação válida para que assim possamos resolver a situação.</div></div>
<div class="script-card" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Documento é captura de tela</span><button class="btn-copiar" onclick="copiarTexto(this,'s17')">Copiar</button></div><div class="script-content" id="s17">Seu documento não pode ser validado por se tratar de Captura de tela.
Necessito que encaminhe a foto do original, frente e verso ou, caso ele esteja em formato digital, deve estar acompanhado do QRCode de validação</div></div>
<div class="script-card" data-categoria="Gov.br"><span class="categoria">Gov.br</span><div class="script-header"><span class="script-title">Registrar solicitação — Dúvidas no aplicativo</span><button class="btn-copiar" onclick="copiarTexto(this,'s18')">Copiar</button></div><div class="script-content" id="s18">Vou pedir que registre uma solicitação no serviço https://www.gov.br/pt-br/servicos/solicitar-atendimento-conta-gov.br
opção “01 - Dúvidas no aplicativo GOV.BR”.

Nossa equipe técnica realizará a análise da sua dificuldade e assim te ajudar com esta demanda.</div></div>
<div class="script-card" data-categoria="Chamados"><span class="categoria">Chamados</span><div class="script-header"><span class="script-title">Chamado encerrado há muito tempo</span><button class="btn-copiar" onclick="copiarTexto(this,'s19')">Copiar</button></div><div class="script-content" id="s19">Este chamado está encerrado a muito tempo, será necessário abrir um novo para que possamos seguir com a solicitação.</div></div>
<div class="script-card" data-categoria="Chamados"><span class="categoria">Chamados</span><div class="script-header"><span class="script-title">Link — Desativar 2FA</span><button class="btn-copiar" onclick="copiarTexto(this,'s20')">Copiar</button></div><div class="script-content" id="s20">

Para desativar a verificação em duas etapas ou desvincular o aplicativo da sua conta gov.br, preencha o formulário através do link abaixo:

https://atendimento.servicos.gov.br/pt/desativar-2fa

Após o preenchimento, pode me informar o número do protocolo/ID, por favor? Assim consigo priorizar para você.</div></div>
<div class="script-card" data-categoria="Chamados"><span class="categoria">Chamados</span><div class="script-header"><span class="script-title">Link — Alterar e-mail</span><button class="btn-copiar" onclick="copiarTexto(this,'s21')">Copiar</button></div><div class="script-content" id="s21">

Para recuperar o acesso à sua conta gov.br, preencha o formulário através do link abaixo:

https://atendimento.servicos.gov.br/pt/alterar-email

Após o preenchimento, pode me informar o número do protocolo/ID, por favor? Assim consigo priorizar para você.

</div></div>
<div class="script-card destaque" data-categoria="Usuários agressivos"><span class="categoria">Usuários agressivos</span><div class="script-header"><span class="script-title">1ª Sinalização</span><button class="btn-copiar" onclick="copiarTexto(this,'s22')">Copiar</button></div><div class="script-content" id="s22"> Vamos manter o papo amigável? Por favor, evite o uso de palavrões por aqui para que possamos seguir com o atendimento da melhor forma.</div></div>
<div class="script-card destaque" data-categoria="Usuários agressivos"><span class="categoria">Usuários agressivos</span><div class="script-header"><span class="script-title">2ª Sinalização</span><button class="btn-copiar" onclick="copiarTexto(this,'s23')">Copiar</button></div><div class="script-content" id="s23">(Nome do usuário), prezamos por um ambiente de atendimento respeitoso. O uso de palavras pejorativas viola nossas diretrizes. Se o vocabulário inadequado continuar, vamos seguir com as medidas adequadas para conduzir o atendimento conforme nossas diretrizes.</div></div>
<div class="script-card destaque" data-categoria="Usuários agressivos"><span class="categoria">Usuários agressivos</span><div class="script-header"><span class="script-title">Orientação final</span><button class="btn-copiar" onclick="copiarTexto(this,'s24')">Copiar</button></div><div class="script-content" id="s24">Como o tom desrespeitoso persistiu, vamos seguir com as medidas previstas em nossos Termos de Uso para conduzir o atendimento de maneira adequada.</div></div>
<div class="script-card" data-categoria="Tempo de resposta"><span class="categoria">Tempo de resposta</span><div class="script-header"><span class="script-title">Reclamação do tempo de resposta</span><button class="btn-copiar" onclick="copiarTexto(this,'s25')">Copiar</button></div><div class="script-content" id="s25">Desculpe. Mas aqui é uma central de atendimento, onde temos vários atendimentos simultâneos. Com isso ocorre um delay sim no tempo de resposta, o que é considerável. Recomendo que, caso não esteja disponível no momento para aguardar o atendimento, nos procure em outro horário. Teremos o prazer de poder te ajudar com a sua demanda.</div></div>
<div class="script-card destaque" data-categoria="Recuperação de conta"><span class="categoria">Recuperação de conta</span><div class="script-header"><span class="script-title">Menor de idade</span><button class="btn-copiar" onclick="copiarTexto(this,'s26')">Copiar</button></div><div class="script-content" id="s26">Para darmos continuidade à recuperação da sua conta, será necessária a participação do seu responsável legal (pai, mãe ou tutor).

Vou te explicar o processo passo a passo.

Serão necessários os seguintes itens:

- Foto do RG do responsável (frente e verso) + número do CPF;
- Selfie (validação facial) do responsável;
- Termo de autorização manuscrito (vou te passar o modelo agora).

📝 Modelo do Termo de Autorização (o responsável deve copiar à mão em uma folha de papel, preencher, assinar e datar):

Eu, [NOME COMPLETO DO RESPONSÁVEL], CPF [CPF DO RESPONSÁVEL], na qualidade de responsável legal de [SEU NOME COMPLETO], CPF [SEU CPF], autorizo o Ministério da Gestão e da Inovação em Serviços Públicos a alterar os dados cadastrais na plataforma gov.br.

[CIDADE], [DATA DE HOJE].

Assinatura do Responsável

Como fazer o procedimento:

Acesse o formulário junto com o seu responsável através deste link:

https://atendimento.servicos.gov.br/pt/comprovar-identidade

Siga as instruções na tela para enviar:

- As fotos do RG
- A selfie do responsável
- A foto do termo manuscrito

Ao finalizar, o sistema vai gerar um número de protocolo.

Após concluir todo o processo, por favor me responda enviando o número do protocolo gerado.

Assim consigo agilizar sua solicitação e liberar o acesso o mais rápido possível.</div></div>
<div class="script-card destaque" data-categoria="Recuperação de conta"><span class="categoria">Recuperação de conta</span><div class="script-header"><span class="script-title">Responsável legal</span><button class="btn-copiar" onclick="copiarTexto(this,'s27')">Copiar</button></div><div class="script-content" id="s27">Para darmos continuidade à recuperação da conta do menor, será necessária a sua participação como responsável legal.

Vou explicar o processo passo a passo para que possamos realizar:

Serão necessários os seguintes itens:

- Foto do seu RG (frente e verso) + número do seu CPF;
- Selfie (validação facial) sua;
- Termo de autorização manuscrito (segue o modelo abaixo).

📝 Modelo do Termo de Autorização (você deve copiar à mão em uma folha de papel, preencher, assinar e datar):

Eu, [SEU NOME COMPLETO], CPF [SEU CPF], na qualidade de responsável legal de [NOME DA SUA FILHA], CPF [CPF DA SUA FILHA], autorizo o Ministério da Gestão e da Inovação em Serviços Públicos a alterar os dados cadastrais na plataforma gov.br.

[CIDADE], [DATA DE HOJE].

Sua Assinatura

Como fazer o procedimento:

Acesse o formulário através deste link:

https://atendimento.servicos.gov.br/pt/comprovar-identidade

Siga as instruções na tela para enviar:

- As fotos do seu RG;
- A sua selfie;
- A foto do termo manuscrito.

Ao finalizar, o sistema irá gerar um número de protocolo. Por favor, após concluir todo o envio, me informe aqui o número do protocolo gerado para que eu possa localizar a solicitação e agilizar a liberação do acesso.</div></div>
<div class="script-card destaque" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Confirmar identidade</span><button class="btn-copiar" onclick="copiarTexto(this,'s28')">Copiar</button></div><div class="script-content" id="s28">Para dar continuidade ao seu processo, por favor acesse o link abaixo e realize a comprovação de identidade:

🔗 Link: https://atendimento.servicos.gov.br/pt/comprovar-identidade

O que será necessário no portal:

- Confirmar sua identidade (selfie);
- Anexar documento oficial com foto (frente e verso).

Atenção:

(Para a Selfie) Não são permitidos bonés, toucas, chapéus, óculos de sol ou qualquer acessório que cubra a cabeça ou o rosto.

(Para o Documento) O documento deve ser original (cópias xerox e prints de tela não são aceitos).
Se for documento digital, envie em PDF com QR Code visível.

Após finalizar o processo, responda esta mensagem informando o número do protocolo gerado.
Assim consigo agilizar sua solicitação e liberar seu acesso o mais rápido possível.</div></div>
<div class="script-card destaque" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Envio de documentos</span><button class="btn-copiar" onclick="copiarTexto(this,'s29')">Copiar</button></div><div class="script-content" id="s29">Para dar sequência à sua solicitação, vou precisar que você nos envie algumas informações através do link abaixo:

- Documento oficial com foto, frente e verso (Se for documento digital, deve ser em PDF com o QR code para validação) e com o número do CPF;

- Foto do CPF, caso seja digital precisa mandar o QR code e não pode ser print, precisa baixar em PDF ou caso não tenha o CPF pode estar solicitando pelo site da Receita Federal abaixo:

https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp

Observação: Cópias (Xerox) e print de tela não são aceitos.

Link do formulário:

https://portal.speedmais.com.br/documentacoesgov/

Após o envio, me avise, por gentileza, para darmos continuidade, tá bem?</div></div>
<div class="script-card" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Complementação de informações</span><button class="btn-copiar" onclick="copiarTexto(this,'s30')">Copiar</button></div><div class="script-content" id="s30">Por gentileza, me confirme os seus dados, conforme abaixo:

Nome completo:
CPF:
Data de Nascimento:
E-mail:</div></div>
<div class="script-card" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Dica de captura Facematch</span><button class="btn-copiar" onclick="copiarTexto(this,'s31')">Copiar</button></div><div class="script-content" id="s31">- Iluminação: Fique em um ambiente bem iluminado, de frente para a luz (janela, por exemplo) e evite sombras no rosto.
- Posição: Segure o celular na altura dos olhos e mantenha o rosto centralizado dentro do círculo que aparece na tela.
- Acessórios: Retire óculos escuros, bonés ou chapéus.
- Câmera: A câmera traseira do celular geralmente possui uma resolução melhor. Se tiver dificuldades com a câmera frontal, procure a opção de usar a câmera traseira no próprio aplicativo.</div></div>
<div class="script-card" data-categoria="Recuperação de conta"><span class="categoria">Recuperação de conta</span><div class="script-header"><span class="script-title">Ensinando a recuperar a senha</span><button class="btn-copiar" onclick="copiarTexto(this,'s32')">Copiar</button></div><div class="script-content" id="s32">Acesse a página de login do gov.br e digite seu CPF.

Clique no botão Esqueci minha senha.

Selecione uma das formas de recuperação disponíveis:

- Reconhecimento facial: valida sua identidade pela câmera do celular comparando com bases oficiais (TSE ou CNH).

- Bancos credenciados: usa o login de um banco parceiro para validar os dados.

- E-mail ou SMS: recebe um código de validação para redefinir o acesso.

Crie uma nova senha forte com letras maiúsculas, minúsculas, números e símbolos.</div></div>
<div class="script-card" data-categoria="Documentação"><span class="categoria">Documentação</span><div class="script-header"><span class="script-title">Dica para o envio do arquivo</span><button class="btn-copiar" onclick="copiarTexto(this,'s33')">Copiar</button></div><div class="script-content" id="s33"># Dica para o envio do arquivo

O arquivo acabou ficando um pouco grande, mas tem um truque bem simples para resolver isso:

1. Envie o arquivo primeiro pelo WhatsApp (o próprio aplicativo reduz o tamanho dele automaticamente).
2. Depois, basta salvar essa versão que você enviou.

Fazendo assim, ele fica mais leve e pronto para uso!</div></div>
`;
