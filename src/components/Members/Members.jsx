import React from 'react';
import Link from 'next/link';
import MembersStyle from '../../styles/MemberSection.module.css';
import MeuBotao from '../../styles/Botao.module.css'

const MembersSection = () => {
  const members = [
    { name: "Gabriel de Andrade Baltazar", rm: "RM 550870" },
    { name: "Livia Freitas Ferreira", rm: "RM 99892 " },
    { name: "Luiza Nunes de Jesus", rm: "RM 99768" },
    { name: "Luiz Felipe Camargo Prendin", rm: "RM 552475" },
    { name: "Renato Sanches Russano Romeu", rm: "RM 551325" },
    { name: "Vinícius De Araújo Camargo", rm: "RM 99494" },
  ];

  const githubRepositoryLink = "https://github.com/freitaslivia/challenge4";

  return (
    <section className={MembersStyle.membersSection}>
      <div className={MembersStyle.membersBox}>
        <h2>Integrantes</h2>
        <p>Equipe de desenvolvimento do projeto</p>

        <ul className={MembersStyle.membersCards}>
          {members.map((member, index) => (
            <li className={MembersStyle.card} key={index}>
              <h4>{member.name}</h4>
              <p>{member.rm}</p>
            </li>
          ))}
        </ul>

        <Link target='_blank' href={githubRepositoryLink} passHref>
          <button className={`${MeuBotao.outlined} ${MeuBotao.outlinedHoverd} ${MeuBotao.botao}`}  > Abrir repositório</button>
        </Link>
      </div>
    </section>
  );
};

export default MembersSection;
