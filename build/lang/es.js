import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Es lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangEsBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangEsBehavior = {
	es: {
		'actionsforEditRubric': 'La acciones para editar rúbrica',
		'addCriteriaGroup': 'Agregar grupo de criterios',
		'addCriterion': 'Agregar criterio',
		'addedOverallLevelAppend': 'A new overall score level has been added after {name}',
		'addedOverallLevelPrepend': 'A new overall score level has been added before {name}',
		'addFeedback': 'Agregar comentarios',
		'addLevel': 'Agregar nivel',
		'addLevelAppend': 'Agregar nuevo nivel después de {name}',
		'addLevelPrepend': 'Agregar nuevo nivel antes de {name}',
		'addOverallLevelAppend': 'Agregar nuevo nivel general después de {name}',
		'addOverallLevelPrepend': 'Agregar nuevo nivel general antes de {name}',
		'advancedAvailabilityHeader': 'Disponibilidad avanzada',
		'alignmentOptionAutomatic': 'Asignar niveles de logro automáticamente a los rangos de porcentajes',
		'alignmentOptionManual': 'Asignar niveles de logro manualmente a los niveles de rúbrica',
		'associationsSaveFailed': 'Se produjo un error al guardar las asociaciones',
		'cellPoints': 'Puntos de celda de criterio',
		'changeConfirmationNo': 'Cancelar',
		'changeConfirmationYes': 'Continuar',
		'changeRubricStatusSuccessful': 'Se cambió el estado de rúbrica a {status}',
		'changeRubricTypeSuccessful': 'Se cambió el tipo de rúbrica a {rubricType}',
		'changeRubricTypeWarnMessage': 'Es posible que se pierdan algunos datos al cambiar la rúbrica de analítica a holística.',
		'changeRubricTypeWarnTitle': '¿Desea cambiar el tipo de rúbrica?',
		'changeScoringSuccessful': 'Se cambió el método de puntuación a {method}',
		'clearFeedback': 'Borrar comentarios',
		'clearOverride': 'Borrar anulación',
		'closeDialog': 'Cerrar',
		'criteriaGroup': 'Criteria Group',
		'criteriaHeading': 'Criterios',
		'criterion': 'Criterion',
		'criterionAdded': 'Se agregó un nuevo criterio',
		'criterionAriaLabel': 'Criterio {index, number} de {count, number}',
		'criterionDeleted': 'Criterio {name} eliminado',
		'criterionDescriptionAriaLabel': 'Descripción del criterio {criterionName}, nivel {levelName}',
		'criterionFeedback': 'Comentarios al criterio',
		'criterionFeedbackAriaLabel': 'Comentarios para el criterio {criterionName}, nivel {levelName}',
		'criterionFeedbackWithCopy': 'se incluirán en los comentarios generales y serán visibles para los estudiantes',
		'criterionMoved': '{name} es ahora un criterio {position}',
		'criterionNameAriaLabel': 'Nombre del criterio',
		'criterionOutOf': 'El criterio {name} tiene {value} puntos',
		'criterionPlaceholder': 'Haga clic para editar el criterio',
		'criterionScore': 'Puntuación del criterio',
		'dashOutOf': '—/{outOf}',
		'deleteConfirmationNo': 'Cancelar',
		'deleteConfirmationYes': 'Eliminar',
		'deleteCriterionConfirmationText': 'Si lo hace, se eliminará el criterio y su contenido de forma permanente.',
		'deleteCriterionConfirmationTitle': '¿Desea eliminar este criterio?',
		'deleteLevelConfirmationText': 'Si lo hace, se eliminará el nivel y su contenido de forma permanente.',
		'deleteLevelConfirmationTitle': '¿Desea eliminar este nivel?',
		'description': 'Descripción',
		'descriptionInfo': 'Agregue una descripción para su referencia personal. No se compartirá con los estudiantes.',
		'descriptionReadOnlyMode': 'Descripción (no es visible para los estudiantes)',
		'descriptionReadOnlyPlaceholder': 'No hay descripción',
		'descriptionSaveFailed': 'No se pudo guardar la descripción',
		'editFeedback': 'Editar comentario',
		'editRubric': 'Editar rúbrica',
		'errorText': 'Lo sentimos. No podemos establecer su conexión. Se recomienda actualizar la página o volver a intentarlo más tarde.',
		'feedback': 'Comentarios',
		'feedbackOn': 'Comentarios sobre {criterionName}',
		'feedbackSaveFailed': 'No se pudo guardar el comentario',
		'groupAdded': 'Se agregó un nuevo grupo de criterios',
		'groupName': 'Nombre del grupo de criterios',
		'groupNameSaveFailed': 'Se produjo un error al guardar el nombre de grupo de criterios',
		'groupRegion': 'Grupo de criterios {name}',
		'helpAssociations': '¿Qué son las asociaciones?',
		'hideScore': 'Ocultar puntuaciones de los estudiantes',
		'hideScoreHeader': 'Visibilidad de la puntuación',
		'initialFeedback': 'Comentarios iniciales',
		'learningOutcomes': 'Resultados de aprendizaje',
		'levelAchieved': 'Nivel logrado:',
		'levelAppended': 'Se agregó un nuevo nivel después de {name}',
		'levelDeleted': 'Nivel {name} eliminado',
		'levelLoading': 'New {name} is loading',
		'levelName': 'Nombre de nivel',
		'levelNameAndBulletPoint': '{levelName} •',
		'levelPoints': 'Puntos de nivel',
		'levelPrepended': 'Se agregó un nuevo nivel antes de {name}',
		'loaLevelLabelMultiRubric': 'El nivel de logro “{loaLevelName}” está asignado a los niveles de rúbrica {otherRubricLevelNames} y {lastRubricLevelName}',
		'loaLevelLabelSingleRubric': 'El nivel de logro “{loaLevelName}” está asignado al nivel de rúbrica {rubricLevelName}',
		'loaLevelUpdatedLabelMultiRubric': 'El nivel de logro “{loaLevelName}” ahora está asignado a los niveles de rúbrica {otherRubricLevelNames} y {lastRubricLevelName}',
		'loaLevelUpdatedLabelSingleRubric': 'El nivel de logro “{loaLevelName}” ahora está asignado al nivel de rúbrica {rubricLevelName}',
		'loaOverlayHeading': 'Niveles de logro',
		'loaSliderLabel': 'Umbral de rendimiento entre \'{loaLevel1}\' y \'{loaLevel2}\'. Utilice las teclas de flecha izquierda y derecha para mover el umbral.',
		'loaThresholdMovementNotif': 'El umbral se movió a la {direction, select, left {izquierda} right {derecha}}',
		'lockedAlertText': 'Esta rúbrica no se puede editar porque ya se utilizó para evaluar el trabajo del estudiante',
		'makeRubricAvailableHeader': 'Rúbrica disponible para',
		'moveCriterionDown': 'Baje el criterio {position}',
		'moveCriterionUp': 'Suba el criterio {position}',
		'name': 'Nombre',
		'nameIsRequired': 'El nombre es obligatorio',
		'nameSaveFailed': 'No se pudo guardar el nombre',
		'newAssociationLabel': 'Permitir nuevas asociaciones en',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, =1 {punto} other {puntos}}',
		'options': 'Opciones',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Descripción general del nivel {levelName}',
		'overallFeedback': 'Comentario general',
		'overallFeedbackAriaLabel': 'Comentario general del nivel {levelName}',
		'overallLevelDeleted': 'Nivel general {name} eliminado',
		'overallLevelName': 'Nombre del nivel general',
		'overallLevelRangeStart': 'Rango de inicio de nivel general',
		'overallScore': 'Puntuación general',
		'overallScoreDescription': 'A cada material enviado se le asigna un nivel de logro según su puntación general de rúbrica.',
		'overallScoreHeader': 'Puntuación general',
		'overallScoreLevel': 'Overall Score Level',
		'overriddenScoreTip': 'Se anuló la puntuación del criterio',
		'overriddenTotalScoreTip': 'Se anuló la puntuación general de rúbrica. La puntuación ya no se actualizará según los cambios realizados en la rúbrica.',
		'overrideLabel': 'Anular',
		'percentage': '{number} %',
		'points': '{number} {number, plural, =1 {punto} other {puntos}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'El valor de punto es obligatorio',
		'pointsMinimum': '{number} {number, plural, =1 {punto} other {puntos}} como mínimo',
		'pointsSaveFailed': 'No se pudieron guardar los puntos',
		'preview': 'Vista previa',
		'rangeStartInvalid': 'El valor de inicio del rango no es válido',
		'rangeStartOrMore': 'o más',
		'rangeStartRequired': 'El valor de inicio del rango es obligatorio',
		'refreshText': 'actualice la página',
		'removeCriterion': 'Eliminar criterio {name}',
		'removeLevel': 'Eliminar nivel {name}',
		'removeOverallLevel': 'Eliminar nivel general {name}',
		'reverseLevelOrder': 'Invertir el orden del nivel',
		'reverseLevelsSuccessful': 'Se invirtió el orden del nivel',
		'rubricAlignmentSaveFailed': 'Se produjo un error al cambiar la alineación de la rúbrica.',
		'rubricFeedbackCopyOption': 'Incluir comentarios de rúbrica en los comentarios generales',
		'rubricLevel': 'Rubric Level',
		'rubricLevelsHeading': 'Niveles de rúbrica',
		'rubricLoadingErrorAriaAlert': 'Surgió un problema al cargar la rúbrica. No se puede mostrar.',
		'rubricLoadingErrorMessage': 'Lo sentimos, no pudimos mostrar la rúbrica.',
		'rubricSavingErrorAriaAlert': 'Surgió un problema al guardar la rúbrica.',
		'rubricSavingErrorMessage': 'Se produjo un error. Revise la rúbrica.',
		'rubricStatus': 'Estado: {status}',
		'rubricStatusArchived': 'Estado: archivado',
		'rubricStatusDraft': 'Estado: borrador',
		'rubricStatusPublished': 'Estado: publicado',
		'rubricSummaryA11y': 'En la primera columna de esta tabla, se muestran el nombre de los criterios y el de los grupos de criterios. En la primera fila, se muestran los nombres de los niveles y se incluyen puntuaciones si se utiliza un método de puntuación numérico en la rúbrica.',
		'rubricType': 'Tipo: {rubricType}',
		'rubricVisibility': 'Visibilidad de la rúbrica',
		'rubricVisibilityAlways': 'La rúbrica es visible para los estudiantes',
		'rubricVisibilityNever': 'La rúbrica está oculta a los estudiantes',
		'rubricVisibilityOnceFeedbackPosted': 'La rúbrica está oculta a los estudiantes hasta que se publiquen comentarios',
		'rubricVisibilitySaveFailed': 'Se produjo un error al cambiar la visibilidad de la rúbrica.',
		'scoreOutOf': '{score}/{outOf}',
		'scoresVisibilityHidden': 'Las puntuaciones están ocultas a los estudiantes',
		'scoresVisibilityVisible': 'Las puntuaciones son visibles para los estudiantes',
		'scoring': 'Puntuación: {method}',
		'selectNextLevel': 'Seleccionar el nivel siguiente',
		'selectPreviousLevel': 'Seleccionar el nivel anterior',
		'setScoreVisibilityFailed': 'Se produjo un error al establecer la visibilidad de la puntuación.',
		'sharedAlertText': 'Esta rúbrica solo se puede editar desde la unidad de organización que la compartió',
		'shareRubricSaveFailed': 'No se pudo cambiar la disponibilidad de la unidad de organización',
		'statistics': 'Estadísticas',
		'total': 'Total',
		'totalMobile': 'Puntuación total',
		'totalScoreAriaLabel': 'La rúbrica tiene una puntuación total de {value} puntos.',
		'totalScoreLabel': 'Puntuación total según la rúbrica'
	}
};
