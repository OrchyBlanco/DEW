function soloTNFLP(){
	for(var i=0;i<datos.length;i++){
		if(datos[i].isla!='Tenerife' && datos[i].isla!='La Palma'){
			datos.splice(i,1);
			i--;
		}
	}
}

datos = [{
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Medio a Distancia',
	  ciclo: '1º CFGM Dist. Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Medio a Distancia',
	  ciclo: '2º CFGM Dist. Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Medio a Distancia',
	  ciclo: '3º CFGM Dist. Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES LOMO DE LA HERRADURA',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.432164',
	  latitud: '27.996808'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES LOMO DE LA HERRADURA',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.432164',
	  latitud: '27.996808'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES LAS GALLETAS',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.654445',
	  latitud: '28.015691'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CPFP CENTRO INTERNACIONAL POLITÉCNICO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.309637',
	  latitud: '28.484104'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CPFP CENTRO INTERNACIONAL POLITÉCNICO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.309637',
	  latitud: '28.484104'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CPFP CENTRO INTERNACIONAL POLITÉCNICO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.309637',
	  latitud: '28.484104'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Web (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Fuerteventura',
	  centro: 'CIFP MAJADA MARCIAL',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-13.8670363919999',
	  latitud: '28.512343565'
	}, {
	  isla: 'Lanzarote',
	  centro: 'IES ZONZAMAS',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Web (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-13.560476225745',
	  latitud: '28.9673820009029'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES ROQUE AMAGRO',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.6661351524069',
	  latitud: '28.1359477951356'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '1º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '2º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior a Distancia',
	  ciclo: '3º CFGS Dist. Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'A distancia',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES LAS GALLETAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.654445',
	  latitud: '28.015691'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES LAS GALLETAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.654445',
	  latitud: '28.015691'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES SIETE PALMAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4503609293258',
	  latitud: '28.1059463639656'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES SIETE PALMAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4503609293258',
	  latitud: '28.1059463639656'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CPFP CENTRO INTERNACIONAL POLITÉCNICO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.309637',
	  latitud: '28.484104'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CPFP CENTRO INTERNACIONAL POLITÉCNICO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.309637',
	  latitud: '28.484104'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Fuerteventura',
	  centro: 'CIFP MAJADA MARCIAL',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.8670363919999',
	  latitud: '28.512343565'
	}, {
	  isla: 'Fuerteventura',
	  centro: 'CIFP MAJADA MARCIAL',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.8670363919999',
	  latitud: '28.512343565'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES PUERTO DE LA CRUZ: TELESFORO BRAVO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.5502711449867',
	  latitud: '28.4121282932278'
	}, {
	  isla: 'La Palma',
	  centro: 'IES JOSÉ MARÍA PÉREZ PULIDO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.9062284287915',
	  latitud: '28.6577322024483'
	}, {
	  isla: 'La Palma',
	  centro: 'IES JOSÉ MARÍA PÉREZ PULIDO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.9062284287915',
	  latitud: '28.6577322024483'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES ROQUE AMAGRO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.6661351524069',
	  latitud: '28.1359477951356'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES ROQUE AMAGRO',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.6661351524069',
	  latitud: '28.1359477951356'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de Aplicaciones Multiplataforma (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Desarrollo de aplicaciones web (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Lanzarote',
	  centro: 'IES ZONZAMAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '1º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.560476225745',
	  latitud: '28.9673820009029'
	}, {
	  isla: 'Lanzarote',
	  centro: 'IES ZONZAMAS',
	  nivel: 'Ciclo Formativo de Grado Superior',
	  ciclo: '2º CFGS Informática y Comunicaciones - Administración de Sistemas Informáticos en Red (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.560476225745',
	  latitud: '28.9673820009029'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Tenerife',
	  centro: 'CIFP CÉSAR MANRIQUE',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2821384291814',
	  latitud: '28.455929460706'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'CIFP VILLA DE AGÜIMES',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4243723431706',
	  latitud: '27.8707571286718'
	}, {
	  isla: 'Fuerteventura',
	  centro: 'CIFP MAJADA MARCIAL',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.8670363919999',
	  latitud: '28.512343565'
	}, {
	  isla: 'Fuerteventura',
	  centro: 'CIFP MAJADA MARCIAL',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.8670363919999',
	  latitud: '28.512343565'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES DOMINGO PÉREZ MINIK',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3064789651204',
	  latitud: '28.4741412375899'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES SANTA ANA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3726773924889',
	  latitud: '28.3510363928142'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES SANTA ANA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.3726773924889',
	  latitud: '28.3510363928142'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES SAN JUAN DE LA RAMBLA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.6392563774695',
	  latitud: '28.3787732540879'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES SAN JUAN DE LA RAMBLA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.6392563774695',
	  latitud: '28.3787732540879'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES LOMO DE LA HERRADURA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.432164',
	  latitud: '27.996808'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES LOMO DE LA HERRADURA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.432164',
	  latitud: '27.996808'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES LAS GALLETAS',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.654445',
	  latitud: '28.015691'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES LAS GALLETAS',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.654445',
	  latitud: '28.015691'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES SIETE PALMAS',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4503609293258',
	  latitud: '28.1059463639656'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES SIETE PALMAS',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4503609293258',
	  latitud: '28.1059463639656'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES EL GALEÓN',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.72972840997014',
	  latitud: '28.11434282364402'
	}, {
	  isla: 'Tenerife',
	  centro: 'IES EL GALEÓN',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.72972840997014',
	  latitud: '28.11434282364402'
	}, {
	  isla: 'Tenerife',
	  centro: 'CPEIPS SAN JUAN BOSCO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2825525144154',
	  latitud: '28.4711938415442'
	}, {
	  isla: 'Tenerife',
	  centro: 'CPEIPS SAN JUAN BOSCO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-16.2825525144154',
	  latitud: '28.4711938415442'
	}, {
	  isla: 'La Palma',
	  centro: 'IES VILLA DE MAZO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.7768859051126',
	  latitud: '28.6035695769056'
	}, {
	  isla: 'La Palma',
	  centro: 'IES VILLA DE MAZO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.7768859051126',
	  latitud: '28.6035695769056'
	}, {
	  isla: 'La Palma',
	  centro: 'IES JOSÉ MARÍA PÉREZ PULIDO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.9062284287915',
	  latitud: '28.6577322024483'
	}, {
	  isla: 'La Palma',
	  centro: 'IES JOSÉ MARÍA PÉREZ PULIDO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-17.9062284287915',
	  latitud: '28.6577322024483'
	}, {
	  isla: 'Lanzarote',
	  centro: 'IES HARÍA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.505638704',
	  latitud: '29.1416728630001'
	}, {
	  isla: 'Lanzarote',
	  centro: 'IES HARÍA',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-13.505638704',
	  latitud: '29.1416728630001'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES ROQUE AMAGRO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.6661351524069',
	  latitud: '28.1359477951356'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES ROQUE AMAGRO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.6661351524069',
	  latitud: '28.1359477951356'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Gran Canaria',
	  centro: 'IES EL RINCÓN',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '2º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.4470284922061',
	  latitud: '28.1274773909952'
	}, {
	  isla: 'Tenerife',
	  centro: 'CPEIPS SAN JUAN BOSCO',
	  nivel: 'Ciclo Formativo de Grado Medio',
	  ciclo: '1º CFGM Informática y Comunicaciones - Sistemas Microinformáticos y Redes (LOE)',
	  modalidad: 'Presencial',
	  longitud: '-15.422567804',
	  latitud: '28.096977182'}
];
