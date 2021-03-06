/*eslint quotes: 0 */
window.testFixtures = window.testFixtures || {};

Object.assign(window.testFixtures, {
	get criterion_added() {
		return {
			"class": [
				"collection",
				"criteria"
			],
			"actions": [{
				"name": "create",
				"method": "POST",
				"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json",
				"fields": []
			}],
			"entities": [{
				"class": [
					"criterion"
				],
				"rel": [
					"https://rubrics.api.brightspace.com/rels/criterion"
				],
				"properties": {
					"name": "Criterion 1"
				},
				"entities": [{
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 4"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "Proper use of grammar",
							"html": "Proper use of grammar"
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1476.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/0.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 3"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1477.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/1.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 2"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1478.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/2.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 1"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1479.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/3.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623.json"
					}]
				}],
				"links": [{
					"rel": [
						"self"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/623.json"
				}, {
					"rel": [
						"up"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json"
				}]
			}, {
				"class": [
					"criterion"
				],
				"rel": [
					"https://rubrics.api.brightspace.com/rels/criterion"
				],
				"properties": {
					"name": "Criterion 2"
				},
				"entities": [{
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 4"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1476.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624/0.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 3"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1477.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624/1.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 2"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1478.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624/2.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 1"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1479.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624/3.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624.json"
					}]
				}],
				"links": [{
					"rel": [
						"self"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/624.json"
				}, {
					"rel": [
						"up"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json"
				}]
			}, {
				"class": [
					"criterion"
				],
				"rel": [
					"https://rubrics.api.brightspace.com/rels/criterion"
				],
				"properties": {
					"name": "Criterion 3"
				},
				"entities": [{
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 4"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1476.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625/0.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 3"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1477.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625/1.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 2"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1478.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625/2.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 1"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1479.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625/3.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625.json"
					}]
				}],
				"links": [{
					"rel": [
						"self"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/625.json"
				}, {
					"rel": [
						"up"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json"
				}]
			}, {
				"class": [
					"criterion"
				],
				"rel": [
					"https://rubrics.api.brightspace.com/rels/criterion"
				],
				"properties": {
					"name": "New Criterion"
				},
				"entities": [{
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 4"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "Proper use of grammar",
							"html": "Proper use of grammar"
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1476.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626/0.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 3"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1477.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626/1.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 2"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1478.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626/2.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626.json"
					}]
				}, {
					"class": [
						"criterion-cell"
					],
					"rel": [
						"item",
						"https://rubrics.api.brightspace.com/rels/criterion-cell"
					],
					"properties": {
						"levelName": "Level 1"
					},
					"entities": [{
						"class": [
							"richtext",
							"description"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}, {
						"class": [
							"richtext",
							"feedback"
						],
						"rel": [
							"item"
						],
						"properties": {
							"text": "",
							"html": ""
						}
					}],
					"links": [{
						"rel": [
							"https://rubrics.api.brightspace.com/rels/level"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/levels/1479.json"
					}, {
						"rel": [
							"self"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626/3.json"
					}, {
						"rel": [
							"up"
						],
						"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626.json"
					}]
				}],
				"links": [{
					"rel": [
						"self"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria/626.json"
				}, {
					"rel": [
						"up"
					],
					"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json"
				}]
			}],
			"links": [{
				"rel": [
					"self"
				],
				"href": "static-data/rubrics/organizations/text-only/199/groups/176/criteria.json"
			}, {
				"rel": [
					"up"
				],
				"href": "static-data/rubrics/organizations/text-only/199/groups/176.json"
			}]
		};
	}
});
