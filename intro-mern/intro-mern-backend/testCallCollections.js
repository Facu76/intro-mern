const tasks = [
    {
      'name': 'Write for Envato Tuts+',
      'duration': 120
    },
    {
      'name': 'Work out',
      'duration': 60
    },
    {
      'name': 'Procrastinate on Duolingo',
      'duration': 240
    }
  ];
   
  const newVal = tasks.map(x => x.name)
  console.log(newVal)
   
  const filter = tasks.filter(x => x.duration > 100).map(x => x.name)
  console.log(filter)
   
  const find = tasks.find(x => x.duration == 60)
  console.log(find.name)
   
  const find2 = tasks.find(x => x.duration == 65)
  console.log(find2)
   

  
  const reduce = tasks.reduce((previous, current) => previous + current.duration, 0)
console.log(reduce)
