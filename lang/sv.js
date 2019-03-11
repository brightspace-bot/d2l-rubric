import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
* Sv lang terms
* @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangSvBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangSvBehavior = {
	sv: {
		'addCriteriaGroup': 'Lägg till kriteriegrupp',
		'addCriterion': 'Lägg till kriterium',
		'addFeedback': 'Lägg till feedback',
		'addLevel': 'Lägg till nivå till vänster',
		'addLevelPrepend': 'Lägg till ny nivå före {name}',
		'addLevelAppend': 'Lägg till ny nivå efter {name}',
		'addOverallLevelAppend': 'Lägg till ny övergripande nivå efter {name}',
		'addOverallLevelPrepend': 'Lägg till ny övergripande nivå före {name}',
		'cellPoints': 'Poäng för kriteriecell',
		'changeScoringSuccessful': 'Betygsättningsmetod ändrad till {method}',
		'clearOverride': 'Rensa åsidosättning',
		'clearFeedback': 'Rensa feedback',
		'criterionAdded': 'Ett nytt kriterium har lagts till',
		'criterionAriaLabel': 'Kriterium {index, number} av {count, number}',
		'criterionDeleted': 'Kriteriet {name} borttaget',
		'criterionDescriptionAriaLabel': 'Beskrivning av kriterium {criterionName}, nivå {levelName}',
		'criterionFeedback': 'Kriteriefeedback',
		'criterionFeedbackAriaLabel': 'Feedback för kriterium {criterionName}, nivå {levelName}',
		'criterionNameAriaLabel': 'Namn på kriterium',
		'criterionOutOf': 'Kriteriet {name} är av {value} poäng',
		'criterionPlaceholder': 'Klicka för att redigera kriteriet',
		'dashOutOf': '– / {outOf}',
		'description': 'Beskrivning',
		'descriptionInfo': 'Lägg till en beskrivning för ditt personliga bruk. Den kommer inte att delas med eleverna',
		'descriptionSaveFailed': 'Beskrivningen kunde inte sparas',
		'editFeedback': 'Redigera feedback',
		'errorText': 'Hoppsan! Vi kan inte ansluta dig. Pröva att uppdatera sidan eller försök igen senare.',
		'feedback': 'Feedback',
		'feedbackSaveFailed': 'Feedback kunde inte sparas',
		'groupAdded': 'En ny kriteriegrupp har lagts till',
		'groupName': 'Namn på kriteriegrupp',
		'groupRegion': 'Kriteriegrupp {name}',
		'helpAssociations': 'Vad är associationer?',
		'hideScore': 'Dölj betyg från elever',
		'hideScoreHeader': 'Synlighet för betyg',
		'levelAchieved': 'Uppnådd nivå: ',
		'levelAppended': 'En ny nivå har lagts till efter {name}',
		'levelDeleted': 'Nivån {name} borttagen',
		'levelName': 'Nivånamn',
		'levelNameAndPoints': '{levelName} - {number} {number, plural, one {poäng} other {poäng}}',
		'levelNameAndPercentage': '{levelName} - {number} %',
		'levelPoints': 'Nivåpoäng',
		'levelPrepended': 'En ny nivå har lagts till före {name}',
		'name': 'Namn',
		'nameIsRequired': 'Namn krävs',
		'nameSaveFailed': 'Namnet kunde inte sparas',
		'options': 'Alternativ',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Övergripande beskrivning av nivå {levelName}',
		'overallFeedback': 'Övergripande feedback',
		'overallFeedbackAriaLabel': 'Övergripande feedback för nivå {levelName}',
		'overallLevelDeleted': 'Övergripande nivå för {name} tas bort',
		'overallLevelName': 'Övergripande nivånamn',
		'overallScoreDescription': 'Varje inlämning tilldelas en prestationsnivå baserat på dess övergripande rubriceringsbetyg.',
		'overallScoreHeader': 'Totalbetyg',
		'overallScore': 'Totalbetyg',
		'overriddenScoreTip': 'Kriteriebetyg har åsidosatts',
		'overriddenTotalScoreTip': 'Det övergripande rubriceringsbetyget har åsidosatts. Betyget uppdateras inte längre baserat på ändringar av rubriceringen.',
		'points': '{number} {number, plural, one {poäng} other {poäng}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'Poängvärde krävs',
		'pointsMinimum': 'Minst {number} {number, plural, one {poäng} other {poäng}}',
		'pointsSaveFailed': 'Poängen kunde inte sparas',
		'percentage': '\{number\} %',
		'preview': 'Förhandsgranska',
		'initialFeedback': 'Inledande feedback',
		'refreshText': 'uppdatera sidan',
		'removeCriterion': 'Ta bort kriterium {name}',
		'removeLevel': 'Ta bort nivå {name}',
		'removeOverallLevel': 'Ta bort övergripande nivå {name}',
		'reverseLevelOrder': 'Byt ordning på nivåer',
		'reverseLevelsSuccessful': 'Nivåordningen har bytts',
		'rubricLoadingErrorAriaAlert': 'Ett problem uppstod med att ladda rubriceringen. Den kan inte visas.',
		'rubricLoadingErrorMessage': 'Tyvärr, vi kunde inte visa rubricering.',
		'rubricSavingErrorAriaAlert': 'Ett problem uppstod med att spara rubriceringen.',
		'rubricSavingErrorMessage': 'Något gick fel. Kontrollera rubriceringen.',
		'rubricSummaryA11y': 'Denna tabell innehåller kriterier och namn på kriteriegrupp i den första kolumnen. På den första raden listas nivånamn och betyg inkluderas om rubriceringen använder en numerisk betygsättningsmetod.',
		'rubricVisibility': 'Rubriceringens synlighet',
		'rubricVisibilityAlways': 'Rubriceringen är synlig för elever',
		'rubricVisibilityOnceFeedbackPosted': 'Rubriceringen är dold för elever tills feedback har publicerats',
		'rubricVisibilityNever': 'Rubriceringen är dold för elever',
		'rubricVisibilitySaveFailed': 'Det gick inte att ändra synlighet för rubricering.',
		'scoreOutOf': '{score}/{outOf}',
		'scoring': 'Betygssättning: {method}',
		'setScoreVisibilityFailed': 'Det gick inte att ställa in synlighet för betyg.',
		'scoresVisibilityHidden': 'Betygen är dolda för elever',
		'scoresVisibilityVisible': 'Betygen är synliga för elever',
		'statistics': 'Statistik',
		'total': 'Totalt antal',
		'totalScoreAriaLabel': 'Rubriceringen är av totalt {value} poäng.',
		'moveCriterionUp': 'Flytta kriterium {position} uppåt',
		'moveCriterionDown': 'Flytta kriterium {position} nedåt',
		'criterionMoved': '{name} är nu kriterium {position}',
		'rangeStartOrMore': 'eller mer',
		'overallLevelRangeStart': 'Startintervall för övergripande nivå',
		'rangeStartRequired': 'Startvärde för intervall krävs',
		'rangeStartInvalid': 'Startvärdet för intervall är ogiltigt',
		'closeDialog': 'Stäng',
		'deleteConfirmationYes': 'Ta bort',
		'deleteConfirmationNo': 'Avbryt',
		'deleteLevelConfirmationTitle': 'Vill du ta bort nivån?',
		'deleteLevelConfirmationText': 'Det här tar bort nivån och dess innehåll permanent.',
		'deleteCriterionConfirmationTitle': 'Vill du ta bort kriteriet?',
		'deleteCriterionConfirmationText': 'Det här tar bort kriteriet och dess innehåll permanent.',
		'rubricType': 'Typ: {rubricType}',
		'changeRubricTypeSuccessful': 'Rubriceringstyp ändrad till {rubricType}',
		'changeConfirmationYes': 'Fortsätt',
		'changeConfirmationNo': 'Avbryt',
		'changeRubricTypeWarnTitle': 'Ändra rubriceringstyp?',
		'changeRubricTypeWarnMessage': 'Ändring av rubricering från analytisk till holistisk kan leda till dataförlust.',
		'rubricStatus': 'Status: {status}',
		'changeRubricStatusSuccessful': 'Rubriceringsstatus ändrad till {status}',
		'editRubric': 'Redigera rubricering',
		'advancedAvailabilityHeader': 'Avancerad tillgänglighet',
		'newAssociationLabel': 'Tillåt nya associationer i',
		'associationsSaveFailed': 'Associationerna kunde inte sparas',
		'descriptionReadOnlyMode': 'Beskrivning (inte synlig för elever)',
		'descriptionReadOnlyPlaceholder': 'Ingen beskrivning',
		'groupNameSaveFailed': 'Namn på kriteriegrupp kunde inte sparas'
	}
};
