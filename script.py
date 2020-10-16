elements = ['antibody', 'antibodyTest', 'asymptomatic', 'bacterium', 'coronavirus', 'covid', 'deadliness', 'disease', 'dna', 'epidemic', 'falseNeg', 'herdImmunity', 'host', 'icu', 'immuneSystem', 'immunity', 'infectiousness', 'mutation', 'pathogen', 'placebo', 'protein', 'respiration', 'sars', 'spikeProtein', 'treatment', 'vaccine', 'virus', 'virusTest']
          
for elem in elements:
    # print(elem+"Elem.addEventListener('click', function() {\n\tthis.setState({image: '"+elem+"'});\n}.bind(this));")
    print("const "+elem+"Elem = document.querySelector('."+elem+"-div');")
    # print("<img src={"+elem+"} width=\"500px\" alt=\"\"/> :")
    # print("import "+elem+" from './img/"+elem +".png';")