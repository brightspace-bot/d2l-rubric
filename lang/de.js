import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
* De lang terms
* @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDeBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDeBehavior = {
	de: {
		'addCriteriaGroup': 'Kriteriengruppe hinzufügen',
		'addCriterion': 'Kriterium hinzufügen',
		'addFeedback': 'Feedback hinzufügen',
		'addLevel': 'Stufe hinzufügen',
		'addLevelPrepend': 'Neue Stufe vor {name} hinzufügen',
		'addLevelAppend': 'Neue Stufe nach {name} hinzufügen',
		'addOverallLevelAppend': 'Neue Gesamtstufe nach {name} hinzufügen',
		'addOverallLevelPrepend': 'Neue Gesamtstufe vor {name} hinzufügen',
		'cellPoints': 'Kriteriumszellen-Punkte',
		'changeScoringSuccessful': 'Bewertungsmethode zu {method} geändert',
		'clearOverride': 'Außerkraftsetzung aufheben',
		'clearFeedback': 'Feedback löschen',
		'criterionAdded': 'Ein neues Kriterium wurde hinzugefügt',
		'criterionAriaLabel': 'Kriterium {index, number} von {count, number}',
		'criterionDeleted': 'Kriterium {name} gelöscht',
		'criterionDescriptionAriaLabel': 'Beschreibung für Kriterium {criterionName}, Stufe {levelName}',
		'criterionFeedback': 'Feedback zum Kriterium',
		'criterionFeedbackAriaLabel': 'Feedback für Kriterium {criterionName}, Stufe {levelName}',
		'criterionNameAriaLabel': 'Name des Kriteriums',
		'criterionOutOf': 'Das Kriterium {name} zählt für maximal {value} Punkte',
		'criterionPlaceholder': 'Zum Bearbeiten des Kriteriums hier klicken',
		'dashOutOf': '—/{outOf}',
		'description': 'Beschreibung',
		'descriptionInfo': 'Fügen Sie eine Beschreibung als persönliche Referenz hinzu. Sie wird für die Teilnehmer nicht angezeigt.',
		'descriptionSaveFailed': 'Speichern der Beschreibung fehlgeschlagen',
		'editFeedback': 'Feedback bearbeiten',
		'errorText': 'Hoppla! Beim Verbindungsaufbau gibt es Probleme. Aktualisieren Sie die Seite, oder versuchen Sie es später erneut.',
		'feedback': 'Feedback',
		'feedbackSaveFailed': 'Speichern des Feedbacks fehlgeschlagen',
		'groupAdded': 'Eine neue Kriteriengruppe wurde hinzugefügt',
		'groupName': 'Name der Kriteriengruppe',
		'groupRegion': 'Kriteriengruppe {name}',
		'helpAssociations': 'Was sind Zuordnungen?',
		'hideScore': 'Punktzahlen aus den Ansichten der Kursteilnehmer ausblenden',
		'hideScoreHeader': 'Sichtbarkeit der Punktzahl',
		'levelAchieved': 'Erreichte Stufe: ',
		'levelAppended': 'Eine neue Stufe wurde nach {name} hinzugefügt',
		'levelDeleted': 'Stufe {name} gelöscht',
		'levelName': 'Name der Stufe',
		'levelNameAndPoints': '{levelName} - {number} {number, plural, one {Punkt} other {Punkte}}',
		'levelNameAndPercentage': '{levelName} – {number} %',
		'levelPoints': 'Stufenpunkte',
		'levelPrepended': 'Eine neue Stufe wurde vor {name} hinzugefügt',
		'name': 'Name',
		'nameIsRequired': 'Name erforderlich',
		'nameSaveFailed': 'Speichern des Namen fehlgeschlagen',
		'options': 'Optionen',
		'outOf': '/{outOf}',
		'overallDescriptionAriaLabel': 'Gesamtbeschreibung für Stufe {levelName}',
		'overallFeedback': 'Gesamtfeedback',
		'overallFeedbackAriaLabel': 'Gesamtfeedback für Stufe {levelName}',
		'overallLevelDeleted': 'Gesamtstufe {name} gelöscht',
		'overallLevelName': 'Name der Gesamtstufe',
		'overallScoreDescription': 'Jeder Abgabe wird basierend auf der Bewertungsschema-Gesamtpunktzahl eine Leistungsstufe zugewiesen.',
		'overallScoreHeader': 'Gesamtpunktzahl',
		'overallScore': 'Gesamtpunktzahl',
		'overriddenScoreTip': 'Kriterium-Punktzahl wurde außer Kraft gesetzt',
		'overriddenTotalScoreTip': 'Die Bewertungsschema-Gesamtpunktzahl wurde außer Kraft gesetzt. Die Punktzahl wird nicht mehr durch Änderungen am Bewertungsschema aktualisiert.',
		'points': '{number} {number, plural, one {Punkt} other {Punkte}}',
		'pointsAbbreviation': 'Pkt',
		'pointsAreRequired': 'Punktwert erforderlich',
		'pointsMinimum': 'Mindestens {number} {number, plural, one {Punkt} other {Punkte}}',
		'pointsSaveFailed': 'Speichern der Punkte fehlgeschlagen',
		'percentage': '\{number\} %',
		'preview': 'Vorschau',
		'initialFeedback': 'Erstes Feedback',
		'refreshText': 'Seite aktualisieren',
		'removeCriterion': 'Kriterium {name} entfernen',
		'removeLevel': 'Stufe {name} entfernen',
		'removeOverallLevel': 'Gesamtstufe {name} entfernen',
		'reverseLevelOrder': 'Stufenreihenfolge umkehren',
		'reverseLevelsSuccessful': 'Die Stufenreihenfolge wurde umgekehrt',
		'rubricLoadingErrorAriaAlert': 'Beim Laden Ihres Bewertungsschemas ist ein Problem aufgetreten. Es kann nicht angezeigt werden.',
		'rubricLoadingErrorMessage': 'Das Bewertungsschema konnte leider nicht angezeigt werden.',
		'rubricSavingErrorAriaAlert': 'Beim Speichern Ihres Bewertungsschemas ist ein Problem aufgetreten.',
		'rubricSavingErrorMessage': 'Etwas ist schiefgelaufen. Bitte überprüfen Sie Ihr Bewertungsschema.',
		'rubricSummaryA11y': 'In der ersten Spalte dieser Tabelle wird der Name der Kriterien und Kriteriengruppen aufgeführt. Die erste Zeile enthält die Namen der Niveaus sowie Punktzahlen, sofern für das Bewertungsschema eine numerische Bewertungsmethode verwendet wird.',
		'rubricVisibility': 'Sichtbarkeit des Bewertungsschemas',
		'rubricVisibilityAlways': 'Bewertungsschema wird für Kursteilnehmer angezeigt',
		'rubricVisibilityOnceFeedbackPosted': 'Bewertungsschema ist für Kursteilnehmer ausgeblendet, bis Feedback veröffentlicht wird',
		'rubricVisibilityNever': 'Bewertungsschema wird für Kursteilnehmer ausgeblendet',
		'rubricVisibilitySaveFailed': 'Ändern der Sichtbarkeit des Bewertungsschemas fehlgeschlagen.',
		'scoreOutOf': '{score}/{outOf}',
		'scoring': 'Punktzahl: {method}',
		'setScoreVisibilityFailed': 'Einstellung der Sichtbarkeit der Punktzahl fehlgeschlagen.',
		'scoresVisibilityHidden': 'Punktzahlen für Kursteilnehmer ausgeblendet',
		'scoresVisibilityVisible': 'Punktzahlen für Kursteilnehmer sichtbar',
		'statistics': 'Statistik',
		'total': 'Gesamt',
		'totalScoreAriaLabel': 'Das Bewertungsschema hat eine maximale Punktzahl von {value}.',
		'moveCriterionUp': 'Kriterium um {position} nach oben verschieben',
		'moveCriterionDown': 'Kriterium um {position} nach unten verschieben',
		'criterionMoved': '{name} ist jetzt Kriterium {position}',
		'rangeStartOrMore': 'oder mehr',
		'overallLevelRangeStart': 'Startbereich der Gesamtstufe',
		'rangeStartRequired': 'Ein Anfangswert des Bereichs ist erforderlich',
		'rangeStartInvalid': 'Der Anfangswert des Bereichs ist ungültig',
		'closeDialog': 'Schließen',
		'deleteConfirmationYes': 'Löschen',
		'deleteConfirmationNo': 'Abbrechen',
		'deleteLevelConfirmationTitle': 'Diese Stufe löschen?',
		'deleteLevelConfirmationText': 'Hiermit werden diese Stufe und ihre Inhalte dauerhaft gelöscht.',
		'deleteCriterionConfirmationTitle': 'Dieses Kriterium löschen?',
		'deleteCriterionConfirmationText': 'Hiermit werden das Kriterium und seine Inhalte dauerhaft gelöscht.',
		'rubricType': 'Typ: {rubricType}',
		'changeRubricTypeSuccessful': 'Bewertungsschema-Typ zu {rubricType} geändert',
		'changeConfirmationYes': 'Weiter',
		'changeConfirmationNo': 'Abbrechen',
		'changeRubricTypeWarnTitle': 'Bewertungsschema-Typ ändern?',
		'changeRubricTypeWarnMessage': 'Beim Ändern Ihres Bewertungsschemas von analytisch zu holistisch könnte es zu Datenverlust kommen.',
		'rubricStatus': 'Status: {status}',
		'changeRubricStatusSuccessful': 'Bewertungsschema-Status zu {status} geändert',
		'editRubric': 'Bewertungsschema bearbeiten',
		'advancedAvailabilityHeader': 'Erweiterte Verfügbarkeit',
		'newAssociationLabel': 'Neue Zuordnungen zulassen in',
		'associationsSaveFailed': 'Speichern der Zuordnungen fehlgeschlagen',
		'descriptionReadOnlyMode': 'Beschreibung (nicht für Kursteilnehmer sichtbar)',
		'descriptionReadOnlyPlaceholder': 'Keine Beschreibung',
		'groupNameSaveFailed': 'Speichern der Kriteriengruppe fehlgeschlagen'
	}
};
