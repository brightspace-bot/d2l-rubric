import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Fr lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangFrBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangFrBehavior = {
	fr: {
		'addCriteriaGroup': 'Ajouter un groupe de critères',
		'addCriterion': 'Ajouter un critère',
		'addFeedback': 'Ajouter une rétroaction',
		'addLevel': 'Ajouter un niveau',
		'addLevelAppend': 'Ajouter un nouveau niveau après {name}',
		'addLevelPrepend': 'Ajouter un nouveau niveau devant {name}',
		'addOverallLevelAppend': 'Ajouter un nouveau niveau global après {name}',
		'addOverallLevelPrepend': 'Ajouter un nouveau niveau global devant {name}',
		'advancedAvailabilityHeader': 'Disponibilité avancée',
		'associationsSaveFailed': 'Échec de l’enregistrement des associations',
		'cellPoints': 'Points de cellule de critère',
		'changeConfirmationNo': 'Annuler',
		'changeConfirmationYes': 'Continuer',
		'changeRubricStatusSuccessful': 'Le statut de la grille d’évaluation a été changé à {status}',
		'changeRubricTypeSuccessful': 'Le type de grille d’évaluation a été changé à {rubricType}',
		'changeRubricTypeWarnMessage': 'Le changement de type de grille d’évaluation d’analytique à globale peut entraîner une perte de données.',
		'changeRubricTypeWarnTitle': 'Changer le type de grille d’évaluation?',
		'changeScoringSuccessful': 'La méthode d’attribution du pointage a été changée à {method}',
		'clearFeedback': 'Effacer la rétroaction',
		'clearOverride': 'Effacer les remplacements',
		'closeDialog': 'Fermer',
		'criteriaHeading': 'Critères',
		'criterionAdded': 'Un nouveau critère a été ajouté',
		'criterionAriaLabel': 'Critère {index, number} de {count, number}',
		'criterionDeleted': 'Critère {name} supprimé',
		'criterionDescriptionAriaLabel': 'Description du critère {criterionName}, niveau {levelName}',
		'criterionFeedback': 'Rétroaction sur les critères',
		'criterionFeedbackAriaLabel': 'Rétroaction pour le critère {criterionName}, niveau {levelName}',
		'criterionMoved': '{name} est maintenant le critère {position}',
		'criterionNameAriaLabel': 'Nom du critère',
		'criterionOutOf': 'Le critère {name} compte pour {value} points',
		'criterionPlaceholder': 'Cliquez pour modifier le critère',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': 'Annuler',
		'deleteConfirmationYes': 'Supprimer',
		'deleteCriterionConfirmationText': 'Cette action supprimera le critère et son contenu de façon permanente.',
		'deleteCriterionConfirmationTitle': 'Supprimer ce critère?',
		'deleteLevelConfirmationText': 'Cette action supprimera le niveau et son contenu de façon permanente.',
		'deleteLevelConfirmationTitle': 'Supprimer ce niveau?',
		'description': 'Description',
		'descriptionInfo': 'Ajouter une description pour votre référence personnelle. Cela ne sera pas partagé avec les élèves.',
		'descriptionReadOnlyMode': 'Description (non visible pour les élèves)',
		'descriptionReadOnlyPlaceholder': 'Aucune description',
		'descriptionSaveFailed': 'Échec de l’enregistrement de la description',
		'editFeedback': 'Modifier la rétroaction',
		'editRubric': 'Modifier la grille d’évaluation',
		'errorText': 'Oups! Nous éprouvons des problèmes de connexion. Veuillez actualiser la page ou réessayer plus tard.',
		'feedback': 'Rétroaction',
		'feedbackSaveFailed': 'Échec de l’enregistrement de la rétroaction',
		'groupAdded': 'Un nouveau groupe de critères a été ajouté',
		'groupName': 'Nom du groupe de critères',
		'groupNameSaveFailed': 'Échec de l’enregistrement du nom du groupe de critères',
		'groupRegion': 'Groupe de critères {name}',
		'helpAssociations': 'Qu’est-ce qu’une association?',
		'hideScore': 'Masquer les notes des scores des élèves',
		'hideScoreHeader': 'Visibilité des notes',
		'initialFeedback': 'Rétroaction initiale',
		'levelAchieved': 'Niveau atteint :',
		'levelAppended': 'Un nouveau niveau a été ajouté après {name}',
		'levelDeleted': 'Niveau {name} supprimé',
		'levelName': 'Nom du niveau',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'levelPoints': 'Pointage du niveau',
		'levelPrepended': 'Un nouveau niveau a été ajouté devant {name}',
		'loaLevelLabel': 'Le niveau de réussite \'{loaLevelName}\' est mappé à la rubrique {rubricLevelCount, plural, one {niveau} other {niveaux}} {rubricLevelNames}',
		'loaOverlayHeading': 'Niveaux de réussite',
		'loaSliderLabel': 'Seuil de réalisation. Utilisez les touches fléchées gauche et droite pour déplacer le seuil entre \'{loaLevel1}\' et \'{loaLevel2}\'',
		'loaThresholdMovementNotif': 'Seuil déplacé vers la {direction, select, left {gauche} right {droite}}',
		'lockedAlertText': 'Cette grille d’évaluation ne peut pas être modifiée parce qu’elle a déjà été utilisée pour évaluer le travail d’un élève',
		'makeRubricAvailableHeader': 'Rendre la rubrique disponible à :',
		'moveCriterionDown': 'Déplacer le critère {position} vers le bas',
		'moveCriterionUp': 'Déplacer le critère {position} vers le haut',
		'name': 'Nom',
		'nameIsRequired': 'Le nom est obligatoire',
		'nameSaveFailed': 'Échec de l’enregistrement du nom',
		'newAssociationLabel': 'Permettre de nouvelles associations dans',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, one {point} other {points}}',
		'options': 'Options',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Description générale du niveau {levelName}',
		'overallFeedback': 'Rétroaction générale',
		'overallFeedbackAriaLabel': 'Rétroaction générale pour le niveau {levelName}',
		'overallLevelDeleted': 'Niveau global {name} supprimé',
		'overallLevelName': 'Nom du niveau global',
		'overallLevelRangeStart': 'Départ de plage du niveau global',
		'overallScore': 'Note globale',
		'overallScoreDescription': 'Chaque soumission se fait attribuer un niveau d’accomplissement basé sur la note globale de la grille d’évaluation.',
		'overallScoreHeader': 'Note globale',
		'overriddenScoreTip': 'La note du critère a été remplacée',
		'overriddenTotalScoreTip': 'La note globale de la grille d’évaluation a été remplacée. La note ne s’actualisera plus en fonction des modifications apportées à la grille d’évaluation.',
		'overrideLabel': 'Remplacer',
		'percentage': '{number} %',
		'points': '{number} {number, plural, one {point} other {points}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'Une valeur de point est requise',
		'pointsMinimum': '{number} {number, plural, one {point} other {points}} minimum',
		'pointsSaveFailed': 'Échec de l’enregistrement des points',
		'preview': 'Prévisualiser',
		'rangeStartInvalid': 'La valeur de départ de la plage n’est pas valide',
		'rangeStartOrMore': 'ou plus',
		'rangeStartRequired': 'Une valeur de départ de plage est requise',
		'refreshText': 'actualiser la page',
		'removeCriterion': 'Retirer le critère {name}',
		'removeLevel': 'Retirer le niveau {name}',
		'removeOverallLevel': 'Supprimer le niveau global {name}',
		'reverseLevelOrder': 'Inverser l’ordre du niveau',
		'reverseLevelsSuccessful': 'L’ordre du niveau a été inversé',
		'rubricLevelsHeading': 'Niveaux de rubrique',
		'rubricLoadingErrorAriaAlert': 'Un problème est survenu lors du téléchargement de votre grille d’évaluation. Elle ne peut pas être affichée.',
		'rubricLoadingErrorMessage': 'Désolé, impossible d’afficher la grille d’évaluation.',
		'rubricSavingErrorAriaAlert': 'Un problème est survenu lors de l’enregistrement de votre grille d’évaluation.',
		'rubricSavingErrorMessage': 'Un problème est survenu. Veuillez vérifier votre grille d’évaluation.',
		'rubricStatus': 'État : {status}',
		'rubricStatusArchived': 'État : Archivé',
		'rubricStatusDraft': 'État : Ébauche',
		'rubricStatusPublished': 'État : Publié',
		'rubricSummaryA11y': 'Ce tableau comprend les critères et le nom du groupe de critères dans la première colonne. La première rangée contient les noms de niveau et comprend des pointages si la grille d’évaluation utilise une méthode de pointage numérique.',
		'rubricType': 'Type : {rubricType}',
		'rubricVisibility': 'Visibilité de la grille d’évaluation',
		'rubricVisibilityAlways': 'La grille d’évaluation est visible pour les élèves',
		'rubricVisibilityNever': 'La grille d’évaluation est cachée pour les élèves',
		'rubricVisibilityOnceFeedbackPosted': 'La grille d’évaluation est cachée jusqu’à ce que la rétroaction soit publiée',
		'rubricVisibilitySaveFailed': 'La modification de la visibilité de la grille d’évaluation a échoué.',
		'scoreOutOf': '{score} / {outOf}',
		'scoresVisibilityHidden': 'Les notes ne sont pas visibles par les élèves',
		'scoresVisibilityVisible': 'Les notes sont visibles par les élèves',
		'scoring': 'Notation : {method}',
		'selectNextLevel': 'Sélectionner le niveau suivant',
		'selectPreviousLevel': 'Sélectionner le niveau précédent',
		'setScoreVisibilityFailed': 'Le paramétrage de la visibilité des notes a échoué.',
		'sharedAlertText': 'Cette rubrique ne peut être modifiée qu’à partir de l’unité org qui l’a partagée',
		'shareRubricSaveFailed': 'Échec de la modification de la disponibilité de l’unité organisationnelle',
		'statistics': 'Statistiques',
		'total': 'Total',
		'totalMobile': 'Total Score',
		'totalScoreAriaLabel': 'La grille d’évaluation compte pour la note totale de {value} points.',
		'totalScoreLabel': 'Note finale de la grille d’évaluation'
	}
};
