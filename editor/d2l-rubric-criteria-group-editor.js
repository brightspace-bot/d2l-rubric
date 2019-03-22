import '@polymer/polymer/polymer-legacy.js';
import 'd2l-table/d2l-table-shared-styles.js';
import 'd2l-table/d2l-scroll-wrapper.js';
import 'd2l-hypermedia-constants/d2l-hypermedia-constants.js';
import 'd2l-alert/d2l-alert.js';
import 'd2l-tooltip/d2l-tooltip.js';
import '../d2l-rubric-entity-behavior.js';
import '../d2l-rubric-loading.js';
import '../localize-behavior.js';
import './d2l-rubric-levels-editor.js';
import './d2l-rubric-criteria-editor.js';
import './d2l-rubric-error-handling-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`<dom-module id="d2l-rubric-criteria-group-editor">
	<template strip-whitespace="">
		<style include="d2l-rubric-editor-cell-styles">
			:host {
				display: block;
			}

			* {
				box-sizing: border-box;
			}

			d2l-alert {
				margin-bottom: 1rem;
			}

			#group-name {
				align-self: flex-start;
			}

			#group-name {
				padding-right: 0.5rem;
			}

			:dir(rtl) #group-name {
				padding-left: 0.5rem;
			}

			[hidden] {
				display: none;
			}

			.stretch-child {
				display: flex;
			}

			/*
				This extra padding is needed to counteract the collapsing of the d2l-alert
				margin with the negative margin applied by the d2l-scroll-wrapper sticky buttons
			*/
			.d2l-alert-container:last-of-type {
				padding-bottom: 1px;
			}
			.d2l-alert-container {
				padding: 0;
				padding-left: var(--d2l-rubric-editor-start-gutter-width);
				padding-right: var(--d2l-rubric-editor-end-gutter-width);
			}
			:dir(rtl) .d2l-alert-container {
				padding-right: var(--d2l-rubric-editor-start-gutter-width);
				padding-left: var(--d2l-rubric-editor-end-gutter-width);
			}
		</style>

		<template is="dom-repeat" items="[[_alerts]]">
			<div class="d2l-alert-container">
				<d2l-alert type="[[item.alertType]]" has-close-button="">
					[[item.alertMessage]]
				</d2l-alert>
			</div>
		</template>

		<d2l-scroll-wrapper id="scroll-wrapper" start-icon="d2l-tier1:chevron-left" end-icon="d2l-tier1:chevron-right" show-actions="" check-scroll-delta-value="1">
			<div class="criteria-group" role="region" aria-label$="[[localize('groupRegion', 'name', _groupName)]]">
				<d2l-rubric-loading hidden$="[[_showContent]]"></d2l-rubric-loading>
				<d2l-rubric-levels-editor href="[[_levelsHref]]" token="[[token]]" has-out-of="[[_hasOutOf(entity)]]" is-holistic="[[isHolistic]]" percentage-format-alternate="[[percentageFormatAlternate]]" on-d2l-siren-entity-changed="_notifyResize">
					<d2l-input-text id="group-name" slot="group-name-slot" value="[[_groupName]]" hidden="[[!showGroupName]]" disabled="[[!_canEditGroupName(entity)]]" on-change="_saveName" aria-invalid="[[isAriaInvalid(_nameInvalid)]]" aria-label$="[[localize('groupName')]]" prevent-submit="">
					</d2l-input-text>
				</d2l-rubric-levels-editor>
				<template is="dom-if" if="[[_nameInvalid]]">
					<d2l-tooltip id="group-name-bubble" for="group-name" position="bottom">
						[[_nameInvalidError]]
					</d2l-tooltip>
				</template>
				<!--
				This flex wrapper div is required to ensure that the d2l-rubric-criteria-editor
				fills the full width of it's parent when the d2l-rubric-criterion-editor components overflow.
				This ensures that the criteria footer which encapsulates the Add Criteria button
				also stretches to utilize all the available space, particularly when we are shrinking
				the size of the editor
				-->
				<div class="stretch-child">
					<d2l-rubric-criteria-editor href="[[_criteriaCollectionHref]]" token="[[token]]" rich-text-enabled="[[richTextEnabled]]" is-holistic="[[isHolistic]]">
					</d2l-rubric-criteria-editor>
				</div>
			</div>
		</d2l-scroll-wrapper>
	</template>


</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-rubric-criteria-group-editor',

	properties: {
		showGroupName: {
			type: Boolean,
			value: false
		},
		isHolistic: {
			type: Boolean,
			value: false
		},
		percentageFormatAlternate: Boolean,
		_levelsHref: String,
		_criteriaCollectionHref: String,
		_showContent: {
			type: Boolean,
			value: false
		},
		_nameInvalid: {
			type: Boolean,
			value: false
		},
		_nameInvalidError: {
			type: String,
			value: null
		},
		_groupName: {
			type: String
		},
		richTextEnabled: Boolean
	},

	behaviors: [
		D2L.PolymerBehaviors.Rubric.EntityBehavior,
		D2L.PolymerBehaviors.Siren.SirenActionBehavior,
		window.D2L.Hypermedia.HMConstantsBehavior,
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior,
		D2L.PolymerBehaviors.Rubric.ErrorHandlingBehavior
	],

	observers: [
		'_onEntityChanged(entity)',
	],

	ready: function() {
		this.addEventListener('d2l-rubric-editor-save-error', this._handleSaveError.bind(this));
		this.addEventListener('d2l-rubric-editor-levels-width-changed', function(e) {
			this.$$('d2l-rubric-criteria-editor').criterionDetailWidth = e.detail.width;
		}.bind(this));

		this.addEventListener('d2l-rubric-criterion-detail-width-changed', function() {
			afterNextRender(this, function() {
				this.$$('d2l-scroll-wrapper').notifyResize();
			}.bind(this));
		}.bind(this));
	},

	_onEntityChanged: function(entity) {
		if (!entity) {
			return;
		}
		this._levelsHref = this._getLevelsLink(entity);
		this._criteriaCollectionHref = this._getCriteriaLink(entity);
		this._showContent = true;
		this._groupName = entity.properties.name;
	},

	_getCriteriaLink: function(entity) {
		var link = entity && entity.getLinkByRel(this.HypermediaRels.Rubrics.criteria);
		return link && link.href || '';
	},

	_getLevelsLink: function(entity) {
		var link = entity && entity.getLinkByRel(this.HypermediaRels.Rubrics.levels);
		return link && link.href || '';
	},

	_hasOutOf: function(entity) {
		return entity && (
			entity.hasClass(this.HypermediaClasses.rubrics.numeric) ||
			entity.hasClass(this.HypermediaClasses.rubrics.percentage)
		);
	},

	_handleSaveError: function(e) {
		this._clearAlerts();
		e.stopPropagation();
		// only handle generic errors (without details)
		if (e.detail.error && !e.detail.error.hasOwnProperty('stack')) {
			var errObj = e.detail.error.string ? e.detail.error.string : e.detail.error.json ? e.detail.error.json : e.detail.error;
			if (errObj.hasOwnProperty('properties')) {
				return;
			}
		}
		this.fire('iron-announce', { text: this.localize('rubricSavingErrorAriaAlert') }, { bubbles: true });
		this._addAlert('error', e.message, this.localize('rubricSavingErrorMessage'));
	},

	_canEditGroupName: function(entity) {
		return entity && entity.hasActionByName('update');
	},

	_saveName: function(e) {
		var action = this.entity.getActionByName('update');
		if (action) {
			if (!e.target.value.trim()) {
				this.toggleBubble('_nameInvalid', true, 'group-name-bubble', this.localize('nameIsRequired'));
			} else {
				this.toggleBubble('_nameInvalid', false, 'group-name-bubble');
				var fields = [{'name': 'name', 'value':e.target.value}];
				this.performSirenAction(action, fields).then(function() {
					this.fire('d2l-rubric-group-name-saved');
				}.bind(this)).catch(function(err) {
					this.handleValidationError('group-name-bubble', '_nameInvalid', 'groupNameSaveFailed', err);
				}.bind(this));
			}
		}
	},

	_notifyResize: function() {
		afterNextRender(this.$$('d2l-rubric-levels-editor'), function() {
			this.$$('d2l-scroll-wrapper').notifyResize();
		}.bind(this));
	}
});