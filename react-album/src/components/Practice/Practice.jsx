function Practice() {
//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//   };
const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }

  const handleClick = evt => {
//     console.log(obj);
//     let {a, b: d, c: z, e = 10 } = obj
//     console.log(d)
//     console.log(a + e)
const {title, protagonist: {name, enemies:[{name: enemyName, title: enemyTitle}]}} = info // <-- replace the next few `const` lines with this
//   const title = info.title
//   const protagonistName = info.protagonist.name
//   const enemy = info.protagonist.enemies[3]
//   const enemyTitle = enemy.title
//   const enemyName = enemy.name
  console.log(`${enemyName} (${enemyTitle}) is an enemy to ${name} in "${title}"`)
  }

// refactor this to a single line of destructuring...



  return (
    <button className="but" onClick={handleClick}>Test</button>
  )
}

export default Practice;
