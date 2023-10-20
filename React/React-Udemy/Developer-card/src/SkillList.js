function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" backgroundColor="#2357E7" />
      <Skill skill="JavaScript" emoji="💪" backgroundColor="#E8D118" />
      <Skill skill="Web Design" emoji="💪" backgroundColor="#BAD7A4" />
      <Skill skill="Git and GitHub" emoji="👍" backgroundColor="#E5452D" />
      <Skill skill="React" emoji="💪" backgroundColor="#55D4F8" />
      <Skill skill="Svelte" emoji="👦" backgroundColor="#FE3201" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {`${props.skill} ${props.emoji}`}
    </div>
  );
}

export default SkillList;
