const dbMovies = {

    premiere: [
        {
            id: 1,
            category: 'Premiere',
            title: 'Gran Turismo',
            descrip: 'La película está basada en la historia real de Jann Mardenborough, quien ganó una serie de competiciones de Nissan patrocinadas por el videojuego Gran Turismo. Estas competiciones le dieron la oportunidad de convertirse en un piloto de carreras profesional, y en 2011 se convirtió en el tercer ganador de la GT Academy, un programa de Nissan que busca pilotos de carreras a través de Gran Turismo.',
            year: '2023',
            flayer: 'Gran_Turismo.avif',
            img: '',
            alt: 'poster gran turismo',
            trailer: 'https://youtu.be/GVPzGBvPrzw?si=yvggZNOtgdKHJSvO',
            to: 'ruta de la pelicula'
        },
        {
            id: 2,
            category: 'Premiere',
            title: 'La Monja II',
            descrip: 'Cuatro años después de los eventos de la primera película, la hermana Irene regresa a Rumanía para investigar un asesinato en un internado. La monja que fue asesinada era su amiga y compañera de fe, la hermana Victoria. Irene se siente culpable por la muerte de Victoria, ya que ella fue la que la envió a investigar en solitario.',
            year: '2023',
            flayer: 'La_Monja_II.avif',
            img: '',
            alt: 'poster la monja 2',
            trailer: 'https://youtu.be/Em7wEqLzDnE?si=9rSplXkWECGaOHs_',
            to: 'ruta de la pelicula'
        },
        {
            id: 3,
            category: 'Premiere',
            title: 'Megalodon II',
            descrip: 'Un equipo de investigación liderado por Jonas Taylor se sumerge en las profundidades más abismales del mar para investigar una serie de misteriosas muertes de barcos. Sin embargo, su viaje se convierte en caos cuando una operación minera submarina amenaza su misión y los obliga a librar una batalla de alto riesgo por la supervivencia.',
            year: '2023',
            flayer: 'Megalodon_II.avif',
            img: '',
            alt: 'poster megalodon 2',
            trailer: 'https://youtu.be/e6mJF-uDXYE?si=XONLaqLjtkNj2BgE',
            to: 'ruta de la pelicula'
        },
        {
            id: 4,
            category: 'Premiere',
            title: 'Oppenheimer',
            descrip: 'Oppenheimer es un relato épico de la vida y la época de J. Robert Oppenheimer, el físico estadounidense que lideró el Proyecto Manhattan, que condujo al desarrollo de la bomba atómica. La película explora las consecuencias morales de la ciencia y el papel de Oppenheimer en la creación de una arma que cambiaría el mundo para siempre.',
            year: '2023',
            flayer: 'Oppenheimer.avif',
            img: '',
            alt: 'poster oppenheimer',
            trailer: 'https://youtu.be/gMPEbJQun68?si=mCypLCZApafDNio6',
            to: 'ruta de la pelicula'
        },
        {
            id: 5,
            category: 'Premiere',
            title: 'The Marvels',
            descrip: 'La película comienza con Carol Danvers explorando el cosmos en busca de respuestas sobre su pasado. Mientras tanto, Monica Rambeau, ahora una agente de SWORD, investiga una serie de ataques misteriosos. Kamala Khan, una adolescente pakistaní-estadounidense que ha desarrollado superpoderes, se une a la investigación de Rambeau.',
            year: '2023',
            flayer: 'The_Marvels.avif',
            img: '',
            alt: 'poster the marvels',
            trailer: 'https://youtu.be/itm8efx8k8U?si=fgbnKY9XvUvKLJig',
            to: 'ruta de la pelicula'
        },
        {
            id: 6,
            category: 'Premiere',
            title: 'Tortugas Ninja',
            descrip: 'Cuatro tortugas mutantes adolescentes, Leonardo, Raphael, Donatello y Michelangelo, viven en las alcantarillas de Nueva York. Después de años de vivir en secreto, las tortugas deciden salir a la superficie para ganarse el respeto de los humanos y ser aceptadas como adolescentes normales. Las tortugas se unen a una aspirante a reportera, April O`Neil, para luchar contra un misterioso sindicato criminal. Sin embargo, pronto se encuentran cara a cara con un ejército de mutantes creados por el sindicato.',
            year: '2023',
            flayer: 'Tortugas.avif',
            img: '',
            alt: 'poster tortugas ninja',
            trailer: 'https://youtu.be/Ae5_Sm_b8Wc?si=gyhrB4JXHwcESVU0',
            to: 'ruta de la pelicula'
        },
    ],
    
    marvel: [
        {
            id: 1,
            category: 'Comic',
            title: 'Capitan America - El Primer Vengador',
            descrip: 'La película sigue a Steve Rogers, un joven enclenque que se convierte en el Capitán América gracias a un experimento durante la Segunda Guerra Mundial. Lucha contra los nazis, liderados por el Cráneo Rojo, utilizando sus nuevas habilidades sobrehumanas para proteger la libertad y la justicia.',
            year: '2011',
            img: 'Captian_America_The_First_Avenger.jpg',
            alt: 'poster capitan america - primer vengador',
            trailer: 'https://youtu.be/YqEJ0jpFvSU?si=4fH_t4LGZNl6LzmS',
            to: 'ruta de la pelicula'
        },
        {
            id: 2,
            category: 'Comic',
            title: 'Capitana Marvel',
            descrip: '"Capitana Marvel" sigue la historia de Carol Danvers (interpretada por Brie Larson), una piloto de la Fuerza Aérea de los Estados Unidos que obtiene poderes superhumanos después de un encuentro con una tecnología alienígena. Se convierte en Capitana Marvel y se ve envuelta en una guerra galáctica entre dos razas alienígenas. Carol busca descubrir su pasado y desentrañar los misterios de su origen mientras lucha para proteger la Tierra de una amenaza alienígena.',
            year: '2019',
            img: 'Captian_Marvel.jpg',
            alt: 'poster capitana marvel',
            trailer: 'https://youtu.be/-8F3GTOv4a0?si=dJ2zvdeWy0426TIO',
            to: 'ruta de la pelicula'
        },
        {
            id: 3,
            category: 'Comic',
            title: 'Iron Man',
            descrip: '"Iron Man" cuenta la historia de Tony Stark (interpretado por Robert Downey Jr.), un brillante industrial y fabricante de armas que, después de ser secuestrado por un grupo terrorista, construye una armadura tecnológicamente avanzada para escapar. Cuando regresa a casa, decide usar su ingenio y habilidades para convertirse en el superhéroe Iron Man y luchar contra el mal. La película sigue su transformación en un defensor de la justicia y su enfrentamiento con un enemigo que amenaza la paz mundial.',
            year: '2008',
            img: 'Iron_Man.jpg',
            alt: 'poster iron man',
            trailer: '',
            to: 'ruta de la pelicula'
        },
        {
            id: 4,
            category: 'Comic',
            title: 'El Increible Hulk',
            descrip: '"El Increíble Hulk" sigue la vida de Bruce Banner (interpretado por Edward Norton), un científico que, debido a un accidente con radiación gamma, se convierte en Hulk, una criatura gigante con una fuerza inmensa cuando experimenta emociones intensas. Banner está en una búsqueda constante para controlar su ira y encontrar una cura. Mientras tanto, es perseguido por el gobierno y se enfrenta a un enemigo formidable, Abominación, en una batalla épica en las calles de Nueva York.',
            year: '2008',
            img: 'The_Incredible_Hulk.jpg',
            alt: 'poster the incredible hulk',
            trailer: 'https://youtu.be/iAbQLS2TGq4?si=9g9iM7cQC49QujYS',
            to: 'ruta de la pelicula'
        },
        {
            id: 5,
            category: 'Comic',
            title: 'Iron Man II',
            descrip: 'En "Iron Man 2", Tony Stark (interpretado por Robert Downey Jr.) enfrenta nuevos desafíos mientras revela su identidad como Iron Man al mundo. Mientras lucha por mantener la paz, Stark también debe enfrentarse a Ivan Vanko (interpretado por Mickey Rourke), un científico ruso con una vendetta personal y tecnología letal. Mientras tanto, compite con Justin Hammer (interpretado por Sam Rockwell) por la supremacía en la tecnología militar y enfrenta problemas de salud relacionados con el reactor de su pecho. La película es una montaña rusa de acción y avances tecnológicos, mientras Stark trabaja para superar estos desafíos.',
            year: '2010',
            img: 'Iron_Man_II.jpg',
            alt: 'poster iron man 2',
            trailer: '',
            to: 'ruta de la pelicula'
        },
        {
            id: 6,
            category: 'Comic',
            title: 'Thor',
            descrip: '"Thor" cuenta la historia de Thor (interpretado por Chris Hemsworth), el poderoso dios nórdico del trueno, quien es desterrado de Asgard por su arrogancia imprudente. Termina en la Tierra, donde se encuentra despojado de sus poderes divinos y debe aprender humildad. Mientras tanto, su hermano Loki (interpretado por Tom Hiddleston) conspira para tomar el trono de Asgard. Thor debe recuperar su martillo mágico, Mjölnir, y demostrar que es digno de ser un verdadero líder y héroe. La película combina mitología, acción y humor en una emocionante historia de redención y heroísmo.',
            year: '2011',
            img: 'Thor.jpg',
            alt: 'poster thor',
            trailer: 'https://youtu.be/UPcruM4CUak?si=QV3P_YPjHd739u80',
            to: 'ruta de la pelicula'
        },
        {
            id: 7,
            category: 'Comic',
            title: 'Los Vengadores',
            descrip: '"Los Vengadores" reúne a los héroes más icónicos de Marvel, incluyendo a Iron Man, Thor, Hulk, el Capitán América, la Viuda Negra y Hawkeye, para enfrentarse a una amenaza global: Loki, el hermano de Thor, quien busca gobernar la Tierra con un poderoso artefacto alienígena. Los héroes deben superar sus diferencias y trabajar en equipo para detener la invasión de Loki y su ejército extraterrestre. La película es un emocionante espectáculo de acción y heroísmo, marcando la primera vez que estos legendarios personajes se unen en la pantalla grande.',
            year: '2012',
            img: 'The_Avengers.jpg',
            alt: 'poster los vengadores',
            trailer: 'https://youtu.be/UPcruM4CUak?si=QV3P_YPjHd739u80',
            to: 'ruta de la pelicula'
        },
        {
            id: 8,
            category: 'Comic',
            title: 'Iron Man III',
            descrip: '"Iron Man 3" sigue a Tony Stark (interpretado por Robert Downey Jr.) mientras se enfrenta a un nuevo y peligroso enemigo, El Mandarín (interpretado por Ben Kingsley), quien amenaza con destruir su vida y todo lo que Stark valora. La película muestra a Stark en una lucha personal para enfrentar sus propios demonios mientras trata de proteger a quienes ama. Con la ayuda de su ingenio y su armadura, deberá descubrir la verdad detrás del Mandarín y detener su amenaza antes de que sea demasiado tarde. La película es una emocionante aventura llena de acción y sorpresas.',
            year: '2013',
            img: 'Iron_Man_III.jpg',
            alt: 'poster iron man 3',
            trailer: 'https://youtu.be/Ga817lEqAoI?si=lZdGLLyhfLWEPs4K',
            to: 'ruta de la pelicula'
        },
        {
            id: 9,
            category: 'Comic',
            title: 'Thor - Un Mundo Oscuro',
            descrip: '"Thor: Un Mundo Oscuro" sigue a Thor (interpretado por Chris Hemsworth) mientras lucha por mantener la paz en los Nueve Reinos. Sin embargo, se enfrenta a Malekith (interpretado por Christopher Eccleston), líder de los Elfos Oscuros, quien busca utilizar un poderoso éter para sumir al universo en la oscuridad. Thor se ve obligado a unir fuerzas con su enemigo, su hermano Loki (interpretado por Tom Hiddleston), para detener esta amenaza cósmica. La película explora el sacrificio y el heroísmo mientras los héroes se enfrentan a un enemigo imparable en un mundo lleno de peligros.',
            year: '2013',
            img: 'Thor_The_Dark_World.jpg',
            alt: 'poster thor un mundo oscuro',
            trailer: 'https://youtu.be/bHKZ2NHLfKw?si=7Ox1jh_Lx3F5npG8',
            to: 'ruta de la pelicula'
        },
        {
            id: 10,
            category: 'Comic',
            title: 'Capitán América - El Soldado del Invierno',
            descrip: 'En "Capitán América: El Soldado del Invierno", Steve Rogers, el Capitán América (interpretado por Chris Evans), se une a Natasha Romanoff, la Viuda Negra (interpretada por Scarlett Johansson), y Sam Wilson, el Halcón (interpretado por Anthony Mackie), para enfrentar una conspiración dentro de S.H.I.E.L.D. Descubren que la organización está infiltrada por la organización terrorista Hydra y su letal aliado, el Soldado del Invierno, un enemigo enmascarado con habilidades sobrehumanas. La película se desarrolla en un emocionante thriller de espionaje mientras el Capitán América lucha por la verdad y la justicia en un mundo lleno de engaños y traiciones.',
            year: '2014',
            img: 'Captian_America_The_Winter_Soldier.jpg',
            alt: 'poster cápitan américa el soldado del invierno',
            trailer: 'https://youtu.be/mGqYQog6biY?si=4JcKBepVtfm8CLJX',
            to: 'ruta de la pelicula'
        },
        {
            id: 11,
            category: 'Comic',
            title: 'Guardianes de la Galaxia',
            descrip: '"Guardianes de la Galaxia Vol. 1" sigue las aventuras de un grupo inusual de héroes intergalácticos: Peter Quill, también conocido como Star-Lord (interpretado por Chris Pratt), Gamora (interpretada por Zoe Saldana), Drax el Destructor (interpretado por Dave Bautista), Rocket Raccoon (doblado por Bradley Cooper), y Groot (doblado por Vin Diesel). Juntos, forman un equipo para enfrentarse a Ronan el Acusador (interpretado por Lee Pace), un poderoso villano que amenaza con usar un artefacto cósmico para destruir planetas enteros. A través de una mezcla de acción, humor y música retro, los Guardianes de la Galaxia se embarcan en una misión para salvar el universo y forjar una inesperada familia.',
            year: '2014',
            img: 'Guardians_of_the_Galaxy.jpg',
            alt: 'poster guardianes de la galaxia vol.1',
            trailer: 'https://youtu.be/qdIuXCfUKM8?si=C889S8FDjc7Tn6Od',
            to: 'ruta de la pelicula'
        },
        {
            id: 12,
            category: 'Comic',
            title: 'Guardianes de la Galaxia Vol. 2',
            descrip: '"Guardianes de la Galaxia Vol. 2" continúa las aventuras del extravagante equipo de héroes intergalácticos. Mientras luchan contra monstruos y mercenarios, los Guardianes descubren más sobre los misterios de los orígenes de Peter Quill (Star-Lord), incluyendo la identidad de su padre, Ego el Planeta Viviente (interpretado por Kurt Russell). A medida que la familia de los Guardianes se expande y enfrentan nuevos desafíos, deben unirse para proteger la galaxia una vez más. La película ofrece acción trepidante, comedia y momentos emotivos mientras explora la importancia de la amistad y el compromiso.',
            year: '2017',
            img: 'Guardians_of_the_Galaxy_Vol_2.jpg',
            alt: 'poster guardianes de la galaxia vol.2',
            trailer: 'https://youtu.be/cbzLQOcGL9Y?si=NDtOtVgrvpoiKQgF',
            to: 'ruta de la pelicula'
        },
        {
            id: 13,
            category: 'Comic',
            title: 'Vengadores: La Era de Ultron',
            descrip: '"Los Vengadores: La Era de Ultrón" sigue a los superhéroes de Marvel mientras se enfrentan a Ultron, una inteligencia artificial creada por Tony Stark (Iron Man) y Bruce Banner (Hulk) con la intención de proteger el mundo. Sin embargo, Ultron se vuelve contra la humanidad y planea su aniquilación. Los Vengadores, junto con nuevos aliados como Visión y Bruja Escarlata, deben unirse nuevamente para detener a Ultron y enfrentar sus propios conflictos internos. La película combina acción espectacular con dilemas éticos y exploración de la camaradería entre los héroes mientras luchan para salvar el mundo de una amenaza tecnológica despiadada.',
            year: '2015',
            img: 'The_Avengers_Age_of_Ultron.jpg',
            alt: 'poster vengadores la era de ultron',
            trailer: 'https://youtu.be/DMFBm_lp4rU?si=UAfYBwf6k-5-45zL',
            to: 'ruta de la pelicula'
        },
        {
            id: 14,
            category: 'Comic',
            title: 'Ant-Man',
            descrip: '"Ant-Man" sigue la historia de Scott Lang (interpretado por Paul Rudd), un ladrón de poca monta con habilidades para el sigilo que es reclutado por el científico Hank Pym (interpretado por Michael Douglas) para convertirse en el nuevo Ant-Man. Utilizando un traje especial que le permite encogerse hasta el tamaño de una hormiga pero conservando su fuerza humana, Scott debe aprender a controlar sus poderes y unirse a Hank y su hija Hope (interpretada por Evangeline Lilly) para robar tecnología peligrosa de un villano empresario. La película combina acción con un toque de comedia y efectos visuales sorprendentes mientras Scott se convierte en un héroe inusual para proteger el mundo y demostrar que cualquiera puede ser un gran héroe.',
            year: '2015',
            img: 'Ant_Man.jpg',
            alt: 'poster ant man',
            trailer: 'https://youtu.be/42h1BHPf0ag?si=Q0YGLk4lrmkfGu-r',
            to: 'ruta de la pelicula'
        },
        {
            id: 15,
            category: 'Comic',
            title: 'Capitán América: Civil War',
            descrip: '"Capitán América: Civil War" enfrenta a los héroes del Universo Cinematográfico de Marvel (MCU) en un conflicto interno. Steve Rogers (Capitán América) y Tony Stark (Iron Man) lideran facciones opuestas después de que el gobierno propone regulaciones para supervisar y controlar a los superhéroes. La película se convierte en un enfrentamiento épico entre dos equipos de héroes, mientras surgen tensiones, amistades se rompen y nuevos aliados se forman. A medida que la lucha se intensifica, un misterioso villano amenaza con exponer un secreto que podría destruir a los Vengadores. "Civil War" explora temas de responsabilidad, lealtad y consecuencias en un emocionante conflicto superheróico.',
            year: '2016',
            img: 'Captian_America_Civil_War.jpg',
            alt: 'poster capitán américa civil war',
            trailer: 'https://youtu.be/s5PVmDAEuro?si=Z2b1N3hshFQ05JVY',
            to: 'ruta de la pelicula'
        },
        {
            id: 16,
            category: 'Comic',
            title: 'Viuda Negra',
            descrip: '"Viuda Negra" es una película de superhéroes del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2021. La película se centra en Natasha Romanoff, interpretada por Scarlett Johansson, también conocida como Viuda Negra, quien se ve obligada a enfrentar su pasado oscuro cuando una conspiración amenaza con revelar secretos de su historia. A lo largo de la película, Natasha se une a su antigua familia de espías, incluyendo a Yelena Belova, interpretada por Florence Pugh, para desentrañar la verdad detrás de una organización misteriosa llamada el "Red Room". Juntos, luchan contra un poderoso villano llamado Taskmaster mientras exploran el pasado de Natasha y el impacto de sus acciones anteriores como agente de SHIELD y Vengadora. "Viuda Negra" es una emocionante película de acción que arroja luz sobre el pasado de uno de los personajes más queridos del MCU.',
            year: '2021',
            img: 'Black_Widow.jpg',
            alt: 'poster viuda negra',
            trailer: 'https://youtu.be/HlB_8y3cmUg?si=B0XUJMCzuHvFtbyt',
            to: 'ruta de la pelicula'
        },
        {
            id: 17,
            category: 'Comic',
            title: 'Pantera Negra',
            descrip: '"Pantera Negra" es una película de superhéroes del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2018. La película sigue la historia de T`Challa, interpretado por Chadwick Boseman, quien asume el trono de Wakanda después de la muerte de su padre. Wakanda es una nación africana secreta y tecnológicamente avanzada que oculta su riqueza y tecnología al mundo exterior. T`Challa se convierte en el Pantera Negra, el protector de Wakanda, y debe enfrentar desafíos tanto dentro como fuera de su país. Cuando un antiguo enemigo, Erik Killmonger, interpretado por Michael B. Jordan, amenaza con desestabilizar Wakanda y exponer sus secretos al mundo, T`Challa debe tomar decisiones difíciles para defender su legado y su pueblo. "Pantera Negra" es una película que celebra la cultura africana y aborda temas importantes como la identidad, la responsabilidad y la justicia.',
            year: '2018',
            img: 'The_Black_Panther.jpg',
            alt: 'poster la pantera negra',
            trailer: 'https://youtu.be/wp_QaWgfZDc?si=yUv51byYqoVEaPD1',
            to: 'ruta de la pelicula'
        },
        {
            id: 18,
            category: 'Comic',
            title: 'Doctor Strange',
            descrip: '"Doctor Strange" es una película del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2016. La historia sigue a Stephen Strange, interpretado por Benedict Cumberbatch, un cirujano talentoso pero arrogante que sufre un grave accidente automovilístico que daña sus manos, poniendo fin a su carrera. En busca de una cura desesperada, Strange viaja a Nepal y se encuentra con el Anciano, un maestro de las artes místicas interpretado por Tilda Swinton. Bajo su tutela, Strange aprende las artes místicas y se convierte en el Hechicero Supremo, utilizando poderes mágicos para proteger el mundo de amenazas sobrenaturales. La película se sumerge en el mundo de las dimensiones alternas y la magia, y Strange debe enfrentarse al villano Kaecilius, interpretado por Mads Mikkelsen, quien amenaza con desatar fuerzas oscuras. "Doctor Strange" es una película que combina la acción y la magia, introduciendo un nuevo aspecto del MCU y el viaje de transformación de un personaje desde la arrogancia hasta la humildad y el heroísmo.',
            year: '2016',
            img: 'Doctor_Strange.jpg',
            alt: 'poster doctor strange',
            trailer: 'https://youtu.be/pSDvNzXDA38?si=nVkiFY8H-1sglqgh',
            to: 'ruta de la pelicula'
        },
        {
            id: 19,
            category: 'Comic',
            title: 'Spiderman - Homecoming',
            descrip: '"Spider-Man: Homecoming" es una película de superhéroes del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2017. La historia sigue a Peter Parker, interpretado por Tom Holland, un joven que se convierte en Spider-Man y lucha por equilibrar su vida de estudiante de secundaria con sus responsabilidades como superhéroe. Bajo la tutela de Tony Stark (Iron Man), Peter se esfuerza por demostrar su valía y ser parte de los Vengadores. Sin embargo, la trama se complica cuando un villano llamado Adrian Toomes, también conocido como el Buitre, interpretado por Michael Keaton, comienza a amenazar la ciudad con tecnología robada. Peter debe aprender a ser un héroe por sí mismo y enfrentarse al Buitre para proteger a su ciudad y a sus seres queridos. "Spider-Man: Homecoming" es una película que combina la acción y la comedia adolescente, ofreciendo una versión fresca y juvenil del icónico superhéroe arácnido.',
            year: '2017',
            img: 'Spider_Man_Home_Coming.jpg',
            alt: 'poster spiderman homecoming',
            trailer: 'https://youtu.be/5sVGcGJ2XTE?si=igfBR8vn6ZBN95GQ',
            to: 'ruta de la pelicula'
        },
        {
            id: 20,
            category: 'Comic',
            title: 'Ant-Man and Wasp',
            descrip: '"Ant-Man and The Wasp" es una película de superhéroes del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2018. La historia sigue a Scott Lang, interpretado por Paul Rudd, también conocido como Ant-Man, mientras intenta equilibrar su vida como padre y su papel como superhéroe. Cuando Hope van Dyne, interpretada por Evangeline Lilly, y su padre, Hank Pym, interpretado por Michael Douglas, se acercan a Scott para una misión urgente, se embarcan en una búsqueda para rescatar a Janet van Dyne, la madre de Hope, de la dimensión cuántica. Mientras tanto, una misteriosa villana llamada Ghost amenaza con robar la tecnología cuántica de Hank Pym para sus propios propósitos. La película combina secuencias de acción emocionantes con momentos de comedia y exploración de la tecnología cuántica, y presenta a The Wasp como una compañera igualmente poderosa de Ant-Man. "Ant-Man and The Wasp" es una película que amplía el mundo de los héroes diminutos y ofrece una experiencia entretenida en el MCU.',
            year: '2018',
            img: 'Ant_Man_Wasp.jpg',
            alt: 'poster ant man y la avispa',
            trailer: 'https://youtu.be/qsBtNkdcHMg?si=6md8RHKv9ViH3wqQ',
            to: 'ruta de la pelicula'
        },
        {
            id: 21,
            category: 'Comic',
            title: 'Thor: Ragnarok',
            descrip: '"Thor: Ragnarok" es una película de superhéroes del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2017. La película sigue a Thor, interpretado por Chris Hemsworth, quien se encuentra atrapado en el otro extremo del universo sin su martillo, Mjolnir, y debe enfrentar una carrera contra el tiempo para detener a Hela, la diosa de la muerte interpretada por Cate Blanchett, de destruir su hogar, Asgard. Thor se une a su viejo amigo Hulk, interpretado por Mark Ruffalo, y a su hermano adoptivo Loki, interpretado por Tom Hiddleston, en una misión para salvar a su pueblo y evitar el apocalipsis conocido como Ragnarok. La película está llena de acción, humor y elementos cósmicos, y presenta un nuevo tono más ligero y colorido en comparación con las películas anteriores de Thor en el MCU. "Thor: Ragnarok" es una emocionante aventura cósmica que reinventa al personaje y lo coloca en un contexto cósmico más amplio.',
            year: '2017',
            img: 'Thor_Ragnarok.jpg',
            alt: 'poster thor ragnarok',
            trailer: 'https://youtu.be/0gaj048M9Vw?si=38XavMzphsgbssDu',
            to: 'ruta de la pelicula'
        },
        {
            id: 22,
            category: 'Comic',
            title: 'Vengadores: Infinity War',
            descrip: '"Vengadores: Infinity War" es una película épica del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2018. La película sigue a los Vengadores y a sus aliados mientras se enfrentan al poderoso villano Thanos, interpretado por Josh Brolin. Thanos está en busca de las seis Gemas del Infinito, poderosos objetos que le otorgarían un poder inmenso y le permitirían llevar a cabo su plan de eliminar la mitad de la vida en el universo para supuestamente equilibrarlo. Los héroes, incluyendo a Iron Man, Thor, Capitán América, Spider-Man, los Guardianes de la Galaxia y muchos otros, se unen en un esfuerzo desesperado por detener a Thanos antes de que cumpla su devastadora misión. La película está llena de acción, emociones intensas y giros inesperados, y culmina en un enfrentamiento épico en el que los héroes luchan por el destino del universo. "Vengadores: Infinity War" es una película que cambió el curso del MCU y dejó a los fanáticos ansiosos por su continuación en "Vengadores: Endgame".',
            year: '2018',
            img: 'Avengers_Infinity_War.jpg',
            alt: 'poster vengadores infinity war',
            trailer: 'https://youtu.be/3xk11d9hjp0?si=2xeJZHpn4CV3CbSS',
            to: 'ruta de la pelicula'
        },
        {
            id: 23,
            category: 'Comic',
            title: 'Vengadores: End Game',
            descrip: '"Vengadores: Endgame" es la película que sigue a "Vengadores: Infinity War" en el Universo Cinematográfico de Marvel (MCU). Después de que Thanos haya logrado su objetivo de eliminar la mitad de la vida en el universo al obtener todas las Gemas del Infinito, los Vengadores y sus aliados están devastados y desesperados. Sin embargo, se les presenta una oportunidad para deshacer el chasquido de Thanos y restaurar a aquellos que fueron víctimas de su genocidio. Los héroes restantes, incluyendo a Iron Man, Capitán América, Thor, Hulk, Viuda Negra, Hawkeye y otros, se embarcan en un viaje en el tiempo para recuperar las Gemas del Infinito antes de que Thanos las obtenga nuevamente. La película explora temas de sacrificio, redención y amistad, y culmina en una batalla épica entre los Vengadores y Thanos."Vengadores: Endgame" es una película que emocionó a los fanáticos con su drama, acción y momentos emotivos, y sirvió como un cierre satisfactorio para una saga de películas que había estado construyéndose durante más de una década en el MCU.',
            year: '2019',
            img: 'Avengers_End_Game.jpg',
            alt: 'poster vengadores end game',
            trailer: 'https://youtu.be/Oy_SER6dfK4?si=ehIXJg-p-dy4tTh1',
            to: 'ruta de la pelicula'
        },
        {
            id: 24,
            category: 'Comic',
            title: 'Spiderman - Far From Home',
            descrip: '"Spider-Man: Far From Home" es una película del Universo Cinematográfico de Marvel (MCU) que se estrenó en 2019. La trama sigue a Peter Parker, interpretado por Tom Holland, quien después de los eventos de "Vengadores: Endgame", se va de vacaciones escolares a Europa con sus amigos. Sin embargo, su descanso se ve interrumpido cuando un nuevo villano llamado Mysterio, interpretado por Jake Gyllenhaal, aparece y comienza a causar estragos usando tecnología avanzada. Peter se une a Nick Fury, interpretado por Samuel L. Jackson, y Maria Hill, interpretada por Cobie Smulders, para enfrentar la amenaza de Mysterio y proteger a sus amigos y al mundo de sus malvados planes. La película combina elementos de acción, comedia y exploración de la vida de Peter como un joven superhéroe tratando de equilibrar su identidad secreta y su vida personal. "Spider-Man: Far From Home" es una emocionante continuación de la historia de Spider-Man en el MCU.',
            year: '2019',
            img: 'Spider_Man_Far_From_Home.jpg',
            alt: 'poster spiderman far from home',
            trailer: 'https://youtu.be/m4DVLBdHiG0?si=xMO6NfLsD29aut51',
            to: 'ruta de la pelicula'
        },
        {
            id: 25,
            category: 'Comic',
            title: 'Spiderman - No Way Home',
            descrip: 'Spider-Man: No Way Home es una película de superhéroes de 2021 basada en el personaje de Marvel Comics Spider-Man. Es una secuela de Spider-Man: Homecoming (2017) y Spider-Man: Far From Home (2019), y es la película número 27 del Universo Cinematográfico de Marvel (UCM). La película está dirigida por Jon Watts y protagonizada por Tom Holland como Peter Parker / Spider-Man, junto a Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Marisa Tomei, J.K. Simmons, Alfred Molina, Willem Dafoe, Thomas Haden Church, Rhys Ifans y Benedict Wong. En la película, Peter Parker pide al Doctor Strange que ayude a borrar la memoria del mundo de que es Spider-Man, lo que abre el multiverso y permite que los supervillanos de otras realidades se desplacen al universo de Peter.',
            year: '2021',
            img: 'Spider_Man_No_Way_Home.jpg',
            alt: 'poster spiderman no way home',
            trailer: 'https://youtu.be/8nNa5A_MRBU?si=e0Wz4qsOjqko46Fs',
            to: 'ruta de la pelicula'
        },
        {
            id: 26,
            category: 'Comic',
            title: 'Eternals',
            descrip: 'Los Eternos, una raza de seres inmortales enviados a la Tierra por los Celestiales, emergen de su escondite después de miles de años para enfrentarse a una nueva amenaza: los Desviantes. Los Eternos deben unirse para salvar a la Tierra, pero en el camino deben lidiar con sus propios secretos y conflictos.',
            year: '2021',
            img: 'Eternals.jpg',
            alt: 'poster eternals',
            trailer: 'https://youtu.be/iH20gw2wpyg?si=DnZoCZ4hGVwl2nhL',
            to: 'ruta de la pelicula'
        },
        {
            id: 27,
            category: 'Comic',
            title: 'Sang-chi',
            descrip: '"Shang-Chi y la Leyenda de los Diez Anillos" es una película de superhéroes que sigue la historia de Shang-Chi, un joven experto en artes marciales que se ve obligado a enfrentar su pasado cuando su padre, el líder de una organización criminal, lo reclama para continuar con el legado familiar. Shang-Chi se embarca en una aventura llena de acción y descubre sus verdaderos poderes mientras lucha contra enemigos poderosos y desentraña los secretos de los misteriosos Diez Anillos."',
            year: '2021',
            img: 'Shang_Chi.jpg',
            alt: 'poster shang chi',
            trailer: 'https://youtu.be/BD77EOU8N3o?si=XLG4fWFMU8mWSI30',
            to: 'ruta de la pelicula'
        },
        {
            id: 28,
            category: 'Comic',
            title: 'Doctor Strange - Multiverse',
            descrip: 'Tras los eventos de "Spider-Man: No Way Home", el Hechicero Supremo Doctor Strange continúa sus investigaciones sobre el hechizo del olvido. Sin embargo, un viejo amigo que se ha convertido en enemigo busca destruir todos los universos. Con la ayuda de aliados místicos tanto viejos como nuevos, Strange emprende un peligroso viaje por el multiverso desatando el caos y el misterio. En su búsqueda para enfrentarse a un poder desconocido, visitan universos alternativos y se enfrentan a versiones alternativas de ellos mismos y de sus enemigos más poderosos.',
            year: '2022',
            img: 'Doctor_Strange_Multiverse_of_Madness.jpg',
            alt: 'poster doctor strange multiverse',
            trailer: 'https://youtu.be/KREBGtEeW9U?si=IOs8o_1o5SAxvSCg',
            to: 'ruta de la pelicula'
        },
        {
            id: 29,
            category: 'Comic',
            title: 'Thor: Amor y Trueno',
            descrip: 'Thor se embarca en un viaje que no se parece en nada a lo que ha enfrentado antes: una búsqueda de la paz interior. Pero su retiro es interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses, que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda del Rey Valkiria, de Korg y de su ex novia Jane Foster, quien inexplicablemente empuña su martillo mágico, Mjolnir, como la Poderosa Thor. Juntos, se embarcan en una aventura cósmica llena de acontecimientos para descubrir el misterio de la venganza del Carnicero de Dioses y detenerlo antes de que sea demasiado tarde.',
            year: '2022',
            img: 'Thor_Love_and_Thunder.jpg',
            alt: 'poster thor amor y trueno',
            trailer: 'https://youtu.be/E5xC9i_1vvY?si=2R8fFABocbfGt_dK',
            to: 'ruta de la pelicula'
        },
        {
            id: 30,
            category: 'Comic',
            title: 'Wakanda Forever',
            descrip: 'Tras la muerte del rey T`Challa, el reino de Wakanda lucha por protegerse de las potencias mundiales que buscan controlar el vibranium. Mientras la reina Ramonda, Shuri, M`Baku, Okoye y las Dora Milaje se esfuerzan por forjar un nuevo camino para su nación, los héroes deben unirse con la ayuda de War Dog Nakia y Everett Ross para defender a Wakanda de los enemigos que buscan aprovecharse del trono sin rey. Pronto descubren que para continuar protegiendo a su pueblo de las potencias mundiales, deberán buscar nuevos aliados. Y un aliado emerge de los confines del océano que remece el orden mundial de Wakanda y el curso de la historia.',
            year: '2022',
            img: 'Wakanda_Forever.jpg',
            alt: 'poster wakanda forever',
            trailer: 'https://youtu.be/3F0nQOjEB3g?si=-Q1YH-YKZR8G7oaa',
            to: 'ruta de la pelicula'
        },
        {
            id: 31,
            category: 'Comic',
            title: 'Ant-Man and Wasp: Quantumania',
            descrip: 'Scott Lang está enfrentando las consecuencias de sus acciones como Ant-Man y buscando volver a ganarse el lugar en los Vengadores. Mientras tanto, Hope Van Dyne y su padre Hank Pym están investigando los misterios del Reino Cuántico. Sus experimentos los llevan a descubrir que no están solos en ese plano microscópico y desconocido. Cuando un nuevo enemigo llamado Kang el Conquistador emerge, tiene el poder de destruir todo lo que han construido, incluyendo a sus seres queridos. Para sobrevivir, el equipo deberá adentrarse aún más en el Reino Cuántico, donde encuentran sorprendentes aliados y enfrentan peligros inimaginables en una carrera contra el tiempo para salvar el futuro.',
            year: '2023',
            img: 'Ant_Man_Wasp_Quantumania.jpg',
            alt: 'poster quantumania',
            trailer: 'https://youtu.be/aJYWJR7IKQA?si=g0J9YrzcMjCxvQt-',
            to: 'ruta de la pelicula'
        },
        {
            id: 32,
            category: 'Comic',
            title: 'Guardianes de la Galaxia Vol. 3',
            descrip: 'Peter Quill y los Guardianes se encuentran en problemas. Rocket ha formado un nuevo equipo con un objetivo misterioso y Groot está pasando por la adolescencia. Mientras viajan por el espacio y se meten en problemas, descubren que uno de sus miembros tiene un pasado familiar que podría destruir a todo el equipo. Cuando se revelan los secretos del pasado de Gamora, y surge una nueva amenaza en forma del maniático High Evolutionary, los Guardianes deberán permanecer unidos para sobrevivir. Durante su viaje, encontrarán aliados tanto viejos como nuevos, incluyendo a Cosmo el perro espacial. Pero el camino del héroe a menudo está plagado de pérdidas y dolor antes de la victoria final.',
            year: '2023',
            img: 'Guardians_of_the_Galaxy_Vol_3.jpg',
            alt: 'poster guardianes de la galaxia vol.3',
            trailer: 'https://youtu.be/nFYA2kdHy0s?si=4kWaiItgfTYrt_Yj',
            to: 'ruta de la pelicula'
        },
    ],

    dc: [
        {
            id: 1,
            category: 'Comic',
            title: 'Wonder Woman ',
            descrip: '"Wonder Woman" es una película de superhéroes dirigida por Patty Jenkins y lanzada en 2017. La película narra la historia de Diana Prince, una princesa amazona con habilidades especiales que se convierte en la icónica heroína Wonder Woman. Diana se embarca en una misión para detener la Primera Guerra Mundial y descubre su verdadero poder mientras lucha contra las fuerzas del mal. A lo largo de la película, Diana se convierte en un símbolo de esperanza y valentía, defendiendo la justicia y la paz en el mundo.',
            year: '2017',
            img: '',
            alt: 'poster wonder woman',
            trailer: 'https://youtu.be/YttQUY-EWo8?si=QQ-0vaZTDP-_A-Ij',
            to: 'ruta de la pelicula' 
        },
        {
            id: 2,
            category: 'Comic',
            title: 'Jocker',
            descrip: '"Joker" es una película de 2019 dirigida por Todd Phillips que explora la historia de Arthur Fleck, un hombre marginal y mentalmente perturbado que se convierte en el infame villano Joker. La película muestra su descenso a la locura mientras lidia con la crueldad y la indiferencia de la sociedad. Arthur finalmente abraza su identidad como el Joker, desatando el caos en Gotham City. La película es una cruda y perturbadora exploración de la psicología del villano icónico y su transformación en un agente del caos.',
            year: '2019',
            img: '',
            alt: 'poster jocker',
            trailer: 'https://youtu.be/ZMH8NWf9btw?si=uay3Z_ylfmyUhn48',
            to: 'ruta de la pelicula' 
        },
        {
            id: 3,
            category: 'Comic',
            title: 'Wonder Woman 1984',
            descrip: '"Wonder Woman 1984" es una película de superhéroes lanzada en 2020 y dirigida por Patty Jenkins. La historia sigue a Diana Prince, también conocida como Wonder Woman, mientras se enfrenta a una nueva amenaza en el año 1984. Un antiguo artefacto místico llamado la Piedra del Sueño concede deseos a quienes la poseen, pero también trae consigo consecuencias catastróficas. Diana debe enfrentarse a Maxwell Lord, un empresario codicioso que utiliza la piedra para sus propios fines egoístas, y a Cheetah, una amiga convertida en enemiga debido a un deseo mal concebido. A medida que lucha contra estas amenazas, Diana debe tomar decisiones difíciles para salvar al mundo y descubrir la verdad detrás de la misteriosa piedra.',
            year: '2020',
            img: '',
            alt: 'poster wonder woman 1984',
            trailer: 'https://youtu.be/5V_1p_Bk6Wg?si=NPYZEgLNC55vwCLp',
            to: 'ruta de la pelicula' 
        },
        {
            id: 4,
            category: 'Comic',
            title: 'Man Of Steel',
            descrip: '"Man of Steel" es una película de superhéroes lanzada en 2013, dirigida por Zack Snyder. La película narra la historia de origen de Superman, también conocido como Clark Kent o Kal-El. Criado en la Tierra después de ser enviado desde su planeta natal, Krypton, cuando era un bebé, Clark descubre que tiene habilidades sobrehumanas a medida que crece. Cuando el general Zod, un superviviente de Krypton, llega a la Tierra en busca de venganza, Clark se ve obligado a asumir su destino como el defensor de la humanidad. La película explora sus luchas personales y morales mientras trata de proteger a la Tierra de la amenaza de Zod y revela su identidad como Superman al mundo. "Man of Steel" es una reinterpretación moderna y emocionante del icónico superhéroe.',
            year: '2013',
            img: '',
            alt: 'poster man of steel',
            trailer: 'https://youtu.be/BddCj2i5pRw?si=T-XNEKqcMPDO06l1',
            to: 'ruta de la pelicula' 
        },
        {
            id: 5,
            category: 'Comic',
            title: 'Batman vs Superman: Dawn of Justice',
            descrip: '"Batman v Superman: Dawn of Justice" es una película de superhéroes lanzada en 2016, dirigida por Zack Snyder. La trama gira en torno al enfrentamiento épico entre dos de los héroes más icónicos de DC Comics, Batman (interpretado por Ben Affleck) y Superman (interpretado por Henry Cavill). La película explora las preocupaciones de Batman sobre la creciente presencia de Superman en la Tierra y si sus poderes pueden ser una amenaza para la humanidad. Mientras tanto, Lex Luthor (interpretado por Jesse Eisenberg) conspira en las sombras para enfrentar a los dos héroes entre sí. A medida que la rivalidad entre Batman y Superman crece, surgen amenazas mayores que los obligan a unir fuerzas para enfrentar un enemigo común. La película aborda temas de responsabilidad, poder y justicia mientras estos dos titanes se enfrentan y, finalmente, unen sus fuerzas para proteger al mundo.',
            year: '2016',
            img: '',
            alt: 'poster batman vs superman',
            trailer: 'https://youtu.be/NMWAWljzj8M?si=WCTAYYAgk8szO1Le',
            to: 'ruta de la pelicula' 
        },
        {
            id: 6,
            category: 'Comic',
            title: 'Suicide Squad',
            descrip: '"Suicide Squad" es una película de superhéroes y supervillanos lanzada en 2016, dirigida por David Ayer. La película sigue a un grupo de villanos encarcelados que son reclutados por el gobierno de los Estados Unidos para llevar a cabo misiones extremadamente peligrosas y secretas a cambio de reducción de penas. Estos villanos, que incluyen personajes como Harley Quinn, Deadshot, El Diablo, Killer Croc y otros, son conocidos como "Suicide Squad" o "Escuadrón Suicida". Su primera misión implica enfrentarse a una entidad poderosa e inmortal conocida como el "Enchantress". A medida que la película avanza, los miembros del Escuadrón Suicida deben superar sus diferencias y trabajar juntos para enfrentar esta amenaza sobrenatural y salvar al mundo. La película se caracteriza por su estilo oscuro y su tono irreverente, y ofrece una visión única de un grupo de villanos convertidos en héroes forzados.',
            year: '2016',
            img: '',
            alt: 'poster suicide squad',
            trailer: 'https://youtu.be/TwaBdZT0vfk?si=Av-ysD6__oORnpe-',
            to: 'ruta de la pelicula' 
        },
        {
            id: 7,
            category: 'Comic',
            title: 'Justice League',
            descrip: '"Justice League" es una película de superhéroes lanzada en 2017 y dirigida por Zack Snyder, con la versión del director lanzada en 2021 conocida como "Zack Snyder`s Justice League". La película sigue la formación de un equipo de superhéroes icónicos de DC Comics, que incluye a Batman, Wonder Woman, Superman, Aquaman, Flash y Cyborg. Estos héroes se unen para enfrentarse a una amenaza cósmica en forma de Steppenwolf, un poderoso villano que busca reunir tres Cajas Madre para llevar a cabo sus planes de conquista. La película trata sobre la lucha del equipo por trabajar juntos y superar sus diferencias mientras se enfrentan a un enemigo formidable. También explora la resurrección de Superman y su incorporación al equipo. "Justice League" es una épica película de superhéroes que presenta la colaboración entre algunos de los personajes más queridos de DC Comics en un intento por salvar al mundo de la destrucción. La versión de Zack Snyder amplió y profundizó en la historia en comparación con la versión teatral original.',
            year: '2017',
            img: '',
            alt: 'poster justice league',
            trailer: 'https://youtu.be/z5Jaq_8ACvI?si=bOO8UDiTFVfENQfF',
            to: 'ruta de la pelicula' 
        },
    ],

    action:[
        
    ],


};


export default dbMovies;
