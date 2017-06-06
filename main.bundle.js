webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngGroupSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let D3ngGroupSelectionComponent = class D3ngGroupSelectionComponent {
    constructor() {
        this.multi = false;
        this.allowEmpty = false;
        this.groups = [0, 1, 2, 3];
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.values = [];
        this.valuesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    set value(value) {
        this.values = [value];
    }
    get value() {
        return this.values.length == 0 ? -1 : this.values[0];
    }
    onChange(event) {
        if (event.source.checked) {
            if (!this.multi) {
                this.values = [];
            }
            this.values.push(event.value);
        }
        else {
            if (this.values.length == 1 && !this.allowEmpty) {
                event.source.checked = true;
            }
            else {
                this.values.splice(this.values.indexOf(event.value), 1);
            }
        }
        this.changed();
    }
    ngOnInit() {
        if (!this.allowEmpty && this.values.length == 0) {
            this.value = this.values.push(this.groups[0]);
            this.changed();
        }
    }
    changed() {
        this.valuesChange.emit(this.values);
        this.valueChange.emit(this.value);
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("groups")) {
            const toRemove = [];
            const values = Array.from(this.values);
            values.forEach(value => {
                if (this.groups.indexOf(value) == -1) {
                    toRemove.push(value);
                }
            });
            if (toRemove.length > 0) {
                toRemove.forEach(value => {
                    values.splice(values.indexOf(value), 1);
                });
                if (values.length == 0 && !this.allowEmpty) {
                    values.push(this.groups[0]);
                }
                this.values = values;
                this.changed();
            }
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngGroupSelectionComponent.prototype, "multi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngGroupSelectionComponent.prototype, "allowEmpty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], D3ngGroupSelectionComponent.prototype, "groups", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], D3ngGroupSelectionComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], D3ngGroupSelectionComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], D3ngGroupSelectionComponent.prototype, "values", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], D3ngGroupSelectionComponent.prototype, "valuesChange", void 0);
D3ngGroupSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-group-selection',
        template: `    
    <md-button-toggle-group multiple>
      <md-button-toggle *ngFor="let group of groups" 
                        [value]="group" 
                        [checked]="values.indexOf(group) != -1"
                        (change)="onChange($event)"
                        [class]="'group-btn-'+group">
        &nbsp;
      </md-button-toggle>
    </md-button-toggle-group>
  `,
        styles: [
            ':host { display: block; }',
            'md-button-toggle-group { height: 15px; }',
            '.mat-button-toggle-checked { border: solid grey 1px; }',
            '.group-btn-0.mat-button-toggle-checked { background-color: #9E2622; }',
            '.group-btn-0:not(.mat-button-toggle-checked) {background-color: #CC8574; }',
            '.group-btn-1.mat-button-toggle-checked { background-color: #005A9C; }',
            '.group-btn-1:not(.mat-button-toggle-checked) {background-color: #B3C1DF; }',
            '.group-btn-2.mat-button-toggle-checked { background-color: #D4C48E; }',
            '.group-btn-2:not(.mat-button-toggle-checked) {background-color: #E8DEC0; }',
            '.group-btn-3.mat-button-toggle-checked { background-color: #006C45; }',
            '.group-btn-3:not(.mat-button-toggle-checked) {background-color: #76A58E; }',
        ]
    }),
    __metadata("design:paramtypes", [])
], D3ngGroupSelectionComponent);

//# sourceMappingURL=d3ng-groups-selection.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngDemosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngDemosComponent = class D3ngDemosComponent {
};
D3ngDemosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-demos',
        template: `
    <div class="container">
      <div class="nav">
        <md-list>
          <md-list-item><a routerLink="list">List</a></md-list-item>
          <md-list-item><a routerLink="pattern">Pattern</a></md-list-item>
          <md-list-item><a routerLink="parallel-coordinates">Parallel Coordinates</a></md-list-item>
          <md-list-item><a routerLink="scatter-plot">Scatter Plot</a></md-list-item>
          <md-list-item><a routerLink="tree-map">Tree Map</a></md-list-item>
          <md-list-item><a routerLink="chord-diagram">Chord Diagram</a></md-list-item>
          <md-list-item><a routerLink="radial-edge-bundling">Radial Edge Bundling</a></md-list-item>
          <md-list-item><a routerLink="force-graph">Force Graph</a></md-list-item>
          <md-list-item><a routerLink="collapsible-indented-tree">Collapsible Indented Tree</a></md-list-item>
          <md-list-item><a routerLink="histogram">Histogram</a></md-list-item>
        </md-list>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
        styles: [__webpack_require__(281)]
    })
], D3ngDemosComponent);

//# sourceMappingURL=d3ng-demos.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_demos_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_list_demo_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3ng_parallel_coordinates_demo_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3ng_scatter_plot_demo_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3ng_tree_map_demo_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3ng_pattern_demo_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3ng_radial_edge_bundling_demo_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__d3ng_chord_diagram_demo_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__d3ng_force_graph_demo_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__d3ng_collapsible_indented_tree_demo_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_d3ng_components_module__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__d3ng_histogram_demo_component__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngDemosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















const demosRouting = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_3__d3ng_list_demo_component__["a" /* D3ngListDemoComponent */]
    },
    {
        path: 'pattern',
        component: __WEBPACK_IMPORTED_MODULE_7__d3ng_pattern_demo_component__["a" /* D3ngPatternDemoComponent */]
    },
    {
        path: 'parallel-coordinates',
        component: __WEBPACK_IMPORTED_MODULE_4__d3ng_parallel_coordinates_demo_component__["a" /* D3ngParallelCoordinatesDemoComponent */]
    },
    {
        path: 'scatter-plot',
        component: __WEBPACK_IMPORTED_MODULE_5__d3ng_scatter_plot_demo_component__["a" /* D3ngScatterPlotDemoComponent */]
    },
    {
        path: 'tree-map',
        component: __WEBPACK_IMPORTED_MODULE_6__d3ng_tree_map_demo_component__["a" /* D3ngTreeMapDemoComponent */]
    },
    {
        path: 'collapsible-indented-tree',
        component: __WEBPACK_IMPORTED_MODULE_11__d3ng_collapsible_indented_tree_demo_component__["a" /* D3ngCollapsibleIndentedTreeDemoComponent */]
    },
    {
        path: 'chord-diagram',
        component: __WEBPACK_IMPORTED_MODULE_9__d3ng_chord_diagram_demo_component__["a" /* D3ngChordDiagramDemoComponent */]
    },
    {
        path: 'force-graph',
        component: __WEBPACK_IMPORTED_MODULE_10__d3ng_force_graph_demo_component__["a" /* D3ngForceGraphDemoComponent */]
    },
    {
        path: 'radial-edge-bundling',
        component: __WEBPACK_IMPORTED_MODULE_8__d3ng_radial_edge_bundling_demo_component__["a" /* D3ngRadialEdgeBundlingDemoComponent */]
    },
    {
        path: 'histogram',
        component: __WEBPACK_IMPORTED_MODULE_17__d3ng_histogram_demo_component__["a" /* D3ngHistogramDemoComponent */]
    }
];
/* harmony export (immutable) */ __webpack_exports__["b"] = demosRouting;

let D3ngDemosModule = class D3ngDemosModule {
};
D3ngDemosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__d3ng_demos_component__["a" /* D3ngDemosComponent */],
            __WEBPACK_IMPORTED_MODULE_3__d3ng_list_demo_component__["a" /* D3ngListDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__d3ng_chord_diagram_demo_component__["a" /* D3ngChordDiagramDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__d3ng_collapsible_indented_tree_demo_component__["a" /* D3ngCollapsibleIndentedTreeDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__d3ng_force_graph_demo_component__["a" /* D3ngForceGraphDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_4__d3ng_parallel_coordinates_demo_component__["a" /* D3ngParallelCoordinatesDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__d3ng_pattern_demo_component__["a" /* D3ngPatternDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__d3ng_radial_edge_bundling_demo_component__["a" /* D3ngRadialEdgeBundlingDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__d3ng_scatter_plot_demo_component__["a" /* D3ngScatterPlotDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__d3ng_tree_map_demo_component__["a" /* D3ngTreeMapDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__d3ng_histogram_demo_component__["a" /* D3ngHistogramDemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_16__components_d3ng_components_module__["a" /* D3ngComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(demosRouting),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__d3ng_demos_component__["a" /* D3ngDemosComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__d3ng_demos_component__["a" /* D3ngDemosComponent */]],
        providers: [],
    })
], D3ngDemosModule);

//# sourceMappingURL=d3ng-demos.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngComparisonStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let D3ngComparisonStoryComponent = class D3ngComparisonStoryComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__["b" /* D3ngStoryBase */] {
    constructor() {
        super(...arguments);
        this.one = [];
        this.two = []; // without this initialization the child chart is not drawn initially, since it only updates on changing source data
    }
    onSelectedChanged(event) {
        if (event.group == 0) {
            this.one = event.selected;
        }
        else {
            this.two = event.selected;
        }
    }
};
D3ngComparisonStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-d3ng-comparison-story',
        template: __webpack_require__(296),
        styles: [__webpack_require__(282)]
    })
], D3ngComparisonStoryComponent);

//# sourceMappingURL=d3ng-comparison-story.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngInputSelectionStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let D3ngInputSelectionStoryComponent = class D3ngInputSelectionStoryComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__["b" /* D3ngStoryBase */] {
    constructor() {
        super(...arguments);
        this.selection = []; // without this initialization the child chart is not drawn initially, since it only updates on changing source data
    }
    selectedChanged(event) {
        console.log(event);
    }
};
D3ngInputSelectionStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-input-selection-story',
        template: __webpack_require__(297),
        styles: [__webpack_require__(283)]
    })
], D3ngInputSelectionStoryComponent);

//# sourceMappingURL=d3ng-input-selection-story.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngMixedLevelsStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let D3ngMixedLevelsStoryComponent = class D3ngMixedLevelsStoryComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__["b" /* D3ngStoryBase */] {
};
D3ngMixedLevelsStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-mixed-levels-story',
        template: __webpack_require__(298),
        styles: [__webpack_require__(284)]
    })
], D3ngMixedLevelsStoryComponent);

//# sourceMappingURL=d3ng-mixed-levels-story.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngOverlappingGroupsStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let D3ngOverlappingGroupsStoryComponent = class D3ngOverlappingGroupsStoryComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__["b" /* D3ngStoryBase */] {
};
D3ngOverlappingGroupsStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-overlapping-groups-story',
        template: __webpack_require__(299),
        styles: [__webpack_require__(285)]
    })
], D3ngOverlappingGroupsStoryComponent);

//# sourceMappingURL=d3ng-overlapping-groups-story.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngSelectionGroupStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let D3ngSelectionGroupStoryComponent = class D3ngSelectionGroupStoryComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_story_d3ng_story_component__["b" /* D3ngStoryBase */] {
    constructor() { super(); }
    ngOnInit() { }
};
D3ngSelectionGroupStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-selection-group-story',
        template: __webpack_require__(300),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [])
], D3ngSelectionGroupStoryComponent);

//# sourceMappingURL=d3ng-selection-group-story.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_selection_group_story_d3ng_selection_group_story_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_input_selection_story_d3ng_input_selection_story_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_overlapping_groups_story_d3ng_overlapping_groups_story_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3ng_mixed_levels_story_d3ng_mixed_levels_story_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3ng_comparison_story_d3ng_comparison_story_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngStoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let D3ngStoriesComponent = D3ngStoriesComponent_1 = class D3ngStoriesComponent {
    constructor() {
        this.mstories = D3ngStoriesComponent_1.stories;
    }
    ngOnInit() {
    }
};
D3ngStoriesComponent.stories = [
    {
        id: "A",
        path: "selection-group",
        title: "Selection Group",
        subtitle: "Multiple charts share selections.",
        component: __WEBPACK_IMPORTED_MODULE_1__d3ng_selection_group_story_d3ng_selection_group_story_component__["a" /* D3ngSelectionGroupStoryComponent */]
    },
    {
        id: "B",
        path: "overlapping-groups",
        title: "Overlapping groups",
        subtitle: "A chart within multiple groups.",
        component: __WEBPACK_IMPORTED_MODULE_3__d3ng_overlapping_groups_story_d3ng_overlapping_groups_story_component__["a" /* D3ngOverlappingGroupsStoryComponent */]
    },
    {
        id: "C",
        path: "mixed-levels",
        title: "Mixed Hierarchy Levels",
        subtitle: "Grouped charts with data on different levels.",
        component: __WEBPACK_IMPORTED_MODULE_4__d3ng_mixed_levels_story_d3ng_mixed_levels_story_component__["a" /* D3ngMixedLevelsStoryComponent */]
    },
    {
        id: "D",
        path: "input-selection",
        title: "Input from Selections",
        subtitle: "Chart input from the selection of a group.",
        component: __WEBPACK_IMPORTED_MODULE_2__d3ng_input_selection_story_d3ng_input_selection_story_component__["a" /* D3ngInputSelectionStoryComponent */]
    },
    {
        id: "BD",
        path: "comparison",
        title: "Comparisons",
        subtitle: "Use groups and input to compare data.",
        component: __WEBPACK_IMPORTED_MODULE_5__d3ng_comparison_story_d3ng_comparison_story_component__["a" /* D3ngComparisonStoryComponent */]
    }
];
D3ngStoriesComponent = D3ngStoriesComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-stories',
        template: __webpack_require__(301),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], D3ngStoriesComponent);

var D3ngStoriesComponent_1;
//# sourceMappingURL=d3ng-stories.component.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class D3ngSelectionItem {
    constructor() {
        this.group = 0;
        this.selected = [];
    }
}
/* unused harmony export D3ngSelectionItem */

class D3ngSelection {
    constructor() {
        this.items = [];
        this.directSelectionColors = D3ngChart.selectionColors.map(e => e.direct);
        this.indirectSelectionColors = D3ngChart.selectionColors.map(e => e.indirect);
    }
    getSelection(group, direct, create = false) {
        const selection = this.items.find(s => s.group == group && s.direct == direct);
        if (selection) {
            return selection;
        }
        else {
            if (create) {
                const newSelection = new D3ngSelectionItem();
                newSelection.group = group;
                newSelection.direct = direct;
                this.items.push(newSelection);
                return newSelection;
            }
            else {
                return null;
            }
        }
    }
    getSelected(group, direct, create = false) {
        const selection = this.getSelection(group, direct, create);
        if (selection) {
            return selection.selected;
        }
        else {
            return [];
        }
    }
    selectionColor(dataPoint, predicate) {
        if (!predicate) {
            predicate = (selected, dataPoint) => selected.indexOf(dataPoint) != -1;
        }
        let color = "black";
        this.items.forEach(item => {
            if (predicate(item.selected, dataPoint)) {
                if (item.direct) {
                    color = D3ngChart.selectionColors[item.group].direct;
                }
                else {
                    if (this.directSelectionColors.indexOf(color) == -1) {
                        const oldColor = this.indirectSelectionColors.indexOf(color);
                        if (oldColor < item.group) {
                            color = D3ngChart.selectionColors[item.group].indirect;
                        }
                    }
                }
            }
        });
        return color;
    }
    isSelected(dataPoint, predicate) {
        if (!predicate) {
            predicate = (selected, dataPoint) => selected.indexOf(dataPoint) != -1;
        }
        return this.items.findIndex(item => predicate(item.selected, dataPoint)) != -1;
    }
}
/* unused harmony export D3ngSelection */

class D3ngChart {
    constructor() {
        /**
         * The key used to determine the label of `data` nodes.
         */
        this.labelKey = "label";
        /**
         * The key used to determine the type of a `source` data node.
         */
        this.typeKey = "type";
        /**
         * The key used to determine the children of a `source` data node.
         */
        this.childKey = "children";
        /**
         * Number of the current selection group. Selections for each groupd
         * are highlighted with different colors.
         */
        this.currentSelectionGroup = 0;
        this.currentSelection = new D3ngSelection();
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.customLabel = null;
    }
    /**
     * The current selection. (Only based on the current selection group).
     * @type {Array}
     */
    set selected(value) {
        this.onIndirectSelectionChanged(value, this.currentSelectionGroup);
    }
    ;
    /**
     * Calculates a set of representatives for an original data point. The idea is that a parent or child data point
     * in the data set can represent data points that are not within the data set.
     * @param original
     * @returns {any}
     */
    findRepresentative(original) {
        if (this.data.indexOf(original) !== -1) {
            return [original];
        }
        else {
            // original parents first
            let originalParent = this.getParent(original);
            while (originalParent) {
                if (this.data.indexOf(originalParent) !== -1) {
                    return [originalParent];
                }
                originalParent = this.getParent(originalParent);
            }
            // data parents now
            const childRepresentatives = [];
            this.data.forEach(data => {
                let representativeParent = this.getParent(data);
                while (representativeParent) {
                    if (representativeParent == original && childRepresentatives.indexOf(data) == -1) {
                        childRepresentatives.push(data);
                    }
                    // This is not a good idea, since it is just a solution for a specific case.
                    // The following will cause a "flat" selection. The element is only represented if the first parent of
                    // the required type is selected.
                    if (this.getType(representativeParent) != this.getType(data) && this.getType(representativeParent) == this.getType(original)) {
                        break;
                    }
                    representativeParent = this.getParent(representativeParent);
                }
            });
            return childRepresentatives;
        }
    }
    onIndirectSelectionChanged(selected, group) {
        this.updateSelection(selected, group, false);
    }
    computeSelectedRepresentatives(selected) {
        const representatives = [];
        selected.forEach(s => {
            this.findRepresentative(s).forEach(r => {
                representatives.push(r);
            });
        });
        return representatives;
    }
    updateSelection(selected, group, direct) {
        if (!selected) {
            selected = [];
        }
        const selection = this.currentSelection.getSelection(group, direct, true);
        selection.selected = this.computeSelectedRepresentatives(selected);
        this.drawSelection(this.currentSelection);
    }
    setDirectSelection(selected) {
        this.updateSelection(selected, this.currentSelectionGroup, true);
        this.selectedChange.emit(selected);
    }
    drawSelection(selection) {
        const selected = selection
            .getSelected(this.currentSelectionGroup, true)
            .concat(selection.getSelected(this.currentSelectionGroup, false));
        this.drawSelected(selected);
    }
    drawSelected(selected) {
        throw new Error("drawSelected must be overridden, if drawSelection is not overridden.");
    }
    redraw() {
        this.clear();
        this.draw();
    }
    onDataChanged() {
        this.clear();
        this.draw();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("data")) {
            this.onDataChanged();
        }
    }
    setData(data) {
        this.data = data;
        this.onDataChanged();
    }
    /**
     * Return the label of a given data node. The label is
     * also used to compute node colors. The default implementation
     * uses `labelKey`.
     */
    getLabel(node) {
        if (this.customLabel) {
            return this.customLabel(node);
        }
        else {
            if (node) {
                return node[this.labelKey];
            }
            else {
                return undefined;
            }
        }
    }
    getQualifiedLabel(node) {
        let result = null;
        while (node) {
            const label = this.getLabel(node);
            result = (label ? label : "") + (result && label ? "." : "") + (result ? result : "");
            node = this.getParent(node);
        }
        return result;
    }
    /**
     * Returns the type of the given `source` data node.
     * The default implementation uses `typeKey`.
     */
    getType(node) {
        return node[this.typeKey];
    }
    /**
     * Returns the children of a `source` data node. The default implementation
     * assumes each node with children has the `childKey` with an array of
     * child data nodes. Returns empty array, if no children are found.
     */
    getChildren(node) {
        const result = node[this.childKey];
        if (result) {
            return result;
        }
        else {
            return [];
        }
    }
    /**
     * Retrieves the parent node for a given node. The default implementation uses "parent" as key.
     * @param node
     * @returns {any} null if there is no parent.
     */
    getParent(node) {
        return node["parent"];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = D3ngChart;

/**
 * The colors used to draw shapes and lines in charts and diagrams.
 */
D3ngChart.colors = [
    "#ffcdd2", "#f8bbd0", "#e1bee7", "#d1c4e9", "#c5cae9", "#bbdefb", "#b3e5fc", "#b2ebf2", "#b2dfdb", "#c8e6c9",
    "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc"
];
/**
 * The colors used to draw highlighted shapes and lines in charts and diagrams.
 */
D3ngChart.highlighColors = [
    "#e53935", "#d81b60", "#8e24aa", "#5e35b1", "#3949ab", "#1e88e5", "#039be5", "#00acc1", "#00897b", "#43a047",
    "#7cb342", "#c0ca33", "#fdd835", "#ffb300", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a"
];
/**
 * Colors supposed to use for selections, both direct and indirect. Index determines selection group.
 */
D3ngChart.selectionColors = [
    {
        direct: "#9E2622",
        indirect: "#CC8574"
    },
    {
        direct: "#005A9C",
        indirect: "#B3C1DF"
    },
    {
        direct: "#E8DEC0",
        indirect: "#D4C48E"
    },
    {
        direct: "#76A58E",
        indirect: "#006C45"
    },
];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "labelKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "typeKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "childKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "currentSelectionGroup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('selected'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], D3ngChart.prototype, "selected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "selectedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngChart.prototype, "customLabel", void 0);
//# sourceMappingURL=d3ng-chart.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 177;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(212);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'D3ng – D3.js chart component library';
        this.navLinks = [
            {
                path: '/demos',
                label: 'Components'
            },
            {
                path: '/stories',
                label: 'Interactions'
            },
            {
                path: '/workbench',
                label: 'Workbench'
            },
            {
                path: '/code-viz',
                label: 'Example'
            },
        ];
        this.selection = [];
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: `    
    <!--<a routerLink="/demos">Demos</a>
    <a routerLink="/code-viz">CodeViz</a>-->
    
    <nav md-tab-nav-bar>
      <a md-tab-link
         *ngFor="let link of navLinks"
         [routerLink]="link.path"
         routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive">
        {{link.label}}
      </a>
    </nav>

    <router-outlet></router-outlet>
  `,
        styles: [__webpack_require__(270)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demos_d3ng_demos_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demos_d3ng_demos_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_d3ng_components_module__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__code_viz_d3ng_code_viz_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workbench_d3ng_workbench_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__workbench_d3ng_workbench_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stories_d3ng_stories_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stories_d3ng_stories_d3ng_stories_component__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__code_viz_d3ng_code_viz_component__["a" /* D3ngCodeVizComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__demos_d3ng_demos_module__["a" /* D3ngDemosModule */],
            __WEBPACK_IMPORTED_MODULE_15__stories_d3ng_stories_module__["a" /* D3ngStoriesModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_d3ng_components_module__["a" /* D3ngComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_14__workbench_d3ng_workbench_module__["a" /* D3ngWorkbenchModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'code-viz',
                    component: __WEBPACK_IMPORTED_MODULE_11__code_viz_d3ng_code_viz_component__["a" /* D3ngCodeVizComponent */]
                },
                {
                    path: 'demos',
                    component: __WEBPACK_IMPORTED_MODULE_9__demos_d3ng_demos_component__["a" /* D3ngDemosComponent */],
                    children: [...__WEBPACK_IMPORTED_MODULE_8__demos_d3ng_demos_module__["b" /* demosRouting */]]
                },
                {
                    path: 'stories',
                    component: __WEBPACK_IMPORTED_MODULE_16__stories_d3ng_stories_d3ng_stories_component__["a" /* D3ngStoriesComponent */],
                    children: [...__WEBPACK_IMPORTED_MODULE_15__stories_d3ng_stories_module__["b" /* storiesRouting */]]
                },
                {
                    path: 'workbench',
                    component: __WEBPACK_IMPORTED_MODULE_13__workbench_d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngCodeVizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3ngCodeVizComponent = class D3ngCodeVizComponent {
    constructor(http) {
        this.data = [];
        this.typeMetrics = ["WMC-1", "WMC-CC", "WMC-HV", "DIT", "NOC", "CBO", "RFC", "LCOM"];
        this.context = new __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_component__["a" /* D3ngGroupContext */]();
        http.get('/assets/de.hub.srcrepo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.setData(res);
        });
    }
    setData(data) {
        if (data) {
            data.forEach(data => {
                // this.types = this.aggregateTypes(this.data);
                const pkgs = this.aggregatePackageDependencies(data);
                this.normalizePackageDependencies(pkgs);
            });
            this.data = data;
            this.onPackagesChanged(data);
        }
    }
    onPackagesChanged(packages) {
        if (packages.length == 0) {
            this.packages = this.data;
        }
        else {
            this.packages = packages;
        }
    }
    onClassesChanged(event) {
        if (event.group == 1) {
            this.classes = event.selected;
        }
    }
    aggregatePackageDependencies(data) {
        const pkgs = [];
        function visit(element) {
            if (element.type == "package" && element.children) {
                const dMap = {};
                element.children.filter(function (c) { return c.type == "type"; }).forEach(function (c) {
                    if (c.dependencies) {
                        c.dependencies.forEach(function (d) {
                            const pkgId = d.id.substring(0, d.id.lastIndexOf("/"));
                            if (dMap[pkgId]) {
                                dMap[pkgId] = dMap[pkgId] + d.value;
                            }
                            else {
                                dMap[pkgId] = d.value;
                            }
                        });
                    }
                });
                if (Object.keys(dMap).length != 0) {
                    element.dependencies = [];
                    for (const key in dMap) {
                        if (dMap.hasOwnProperty(key)) {
                            element.dependencies.push({
                                "id": key,
                                "value": dMap[key]
                            });
                        }
                    }
                    pkgs.push(element);
                }
            }
            if (element.children) {
                element.children.forEach(function (child) {
                    visit(child);
                });
            }
        }
        visit(data);
        return pkgs;
    }
    normalizePackageDependencies(pkgs) {
        const pMap = {};
        pkgs.forEach(function (p) {
            pMap[p.id] = p;
        });
        pkgs.forEach(function (p) {
            if (p.dependencies) {
                p.dependencies.forEach(function (d) {
                    if (pMap[d.id]) {
                        if (!pMap[d.id].dependencies) {
                            pMap[d.id].dependencies = [];
                        }
                        let otherD = pMap[d.id].dependencies.find(function (dd) { return dd.id == p.id; });
                        if (!otherD) {
                            otherD = { "id": p.id, "value": 0 };
                            pMap[d.id].dependencies.push(otherD);
                        }
                        otherD.value += d.value;
                    }
                });
            }
        });
    }
};
D3ngCodeVizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-code-viz',
        template: __webpack_require__(294),
        styles: [__webpack_require__(272), __webpack_require__(271)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], D3ngCodeVizComponent);

var _a;
//# sourceMappingURL=d3ng-code-viz.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_dependency_chart__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngChordDiagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3ngChordDiagramComponent = D3ngChordDiagramComponent_1 = class D3ngChordDiagramComponent extends __WEBPACK_IMPORTED_MODULE_3__d3ng_dependency_chart__["a" /* D3ngDependencyChart */] {
    constructor() {
        super(...arguments);
        this.indexes = null;
        this.group = null;
        this.chord = null;
    }
    drawSelection(selection) {
        if (this.group && this.chord) {
            this.group.select("path").style("fill", group => {
                const color = selection.selectionColor(group, (selected, group) => {
                    return !selected.every(dataPoint => group.index != this.indexes[this.getId(dataPoint)]);
                });
                if (color != "black") {
                    return color;
                }
                else {
                    return this.color(group.index);
                }
            });
            this.chord.style("fill", chord => {
                const color = selection.selectionColor(chord, (selected, chord) => {
                    return !selected.every(dataPoint => {
                        const selectedIndex = this.indexes[this.getId(dataPoint)];
                        return !(chord.source.index == selectedIndex || chord.target.index == selectedIndex);
                    });
                });
                if (color != "black") {
                    return color;
                }
                else {
                    return this.color(chord.source.index);
                }
            });
        }
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    color(index) {
        return __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */].colors[index % __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */].colors.length];
    }
    draw() {
        const self = this;
        if (!this.data) {
            return;
        }
        let width = this.chart.nativeElement.offsetWidth, height = this.chart.nativeElement.offsetHeight;
        if (height < width && height > 0) {
            width = height;
        }
        else {
            height = width;
        }
        const outerRadius = Math.min(width, height) / 2 - 10, innerRadius = outerRadius - 24;
        const formatPercent = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](".1%");
        const arc = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        const layout = __WEBPACK_IMPORTED_MODULE_1_d3__["layout"].chord()
            .padding(.04)
            .sortSubgroups(__WEBPACK_IMPORTED_MODULE_1_d3__["descending"])
            .sortChords(__WEBPACK_IMPORTED_MODULE_1_d3__["ascending"]);
        const path = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].chord()
            .radius(innerRadius);
        // Add svg chart.
        const d_chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.chart.nativeElement);
        const svg = d_chart.append("svg:svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("id", "circle")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        svg.append("circle")
            .attr("r", outerRadius);
        // compute the chord matrix
        const indexes = {};
        for (let i = 0; i < self.data.length; i++) {
            indexes[self.getId(self.data[i])] = i;
        }
        const matrix = [];
        self.data.forEach(function (it) {
            const values = Array.apply(null, Array(self.data.length)).map(Number.prototype.valueOf, 0);
            const dependencies = self.getDependencies(it);
            if (dependencies) {
                dependencies.forEach(function (dep) {
                    values[indexes[self.getId(dep)]] = self.getValue(dep);
                });
            }
            matrix[indexes[self.getId(it)]] = values;
        });
        self.indexes = indexes;
        // Compute the chord layout.
        layout.matrix(matrix);
        // Add a group per neighborhood.
        const group = svg.selectAll(".group")
            .data(layout.groups)
            .enter().append("g")
            .attr("class", "group")
            .on("mouseover", mouseover)
            .on("click", click);
        self.group = group;
        // Add a mouseover title.
        group.append("title").text(function (d, i) {
            return self.getQualifiedLabel(self.data[i]);
        });
        // Add the group arc.
        const groupPath = group.append("path")
            .attr("id", function (d, i) { return "group" + i; })
            .attr("d", arc)
            .style("fill", function (d, i) { return self.color(i); });
        // Add a text label.
        const groupText = group.append("text")
            .attr("x", 6)
            .attr("dy", 15);
        groupText.append("textPath")
            .attr("xlink:href", function (d, i) { return "#group" + i; })
            .text(function (d, i) { return self.data[i].label; });
        // Remove the labels that don't fit. :(
        groupText.filter(function (d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
            .remove();
        // Add the chords.
        const chord = svg.selectAll(".chord")
            .data(layout.chords)
            .enter().append("path")
            .attr("class", "chord")
            .style("fill", function (d) { return self.color(d.source.index); })
            .attr("d", path);
        self.chord = chord;
        function mouseover(d, i) {
            chord.classed("fade", function (p) {
                return p.source.index != i
                    && p.target.index != i;
            });
        }
        function click(d, i) {
            const isDeselect = self.selected && self.selected.length == 1 && indexes[self.selected[0]] == i;
            let selected;
            if (isDeselect) {
                selected = [];
            }
            else {
                selected = self.data
                    .filter(function (f) {
                    return indexes[self.getId(f)] == i;
                });
            }
            self.setDirectSelection(selected);
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngChordDiagramComponent.prototype, "chart", void 0);
D3ngChordDiagramComponent = D3ngChordDiagramComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-chord-diagram',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngChordDiagramComponent_1) }],
        template: `
    <div #chart></div>`,
        styles: [__webpack_require__(273)]
    })
], D3ngChordDiagramComponent);

var D3ngChordDiagramComponent_1;
//# sourceMappingURL=d3ng-chord-diagram.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngCollapsibleIndentedTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3ngCollapsibleIndentedTreeComponent = D3ngCollapsibleIndentedTreeComponent_1 = class D3ngCollapsibleIndentedTreeComponent extends __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__["a" /* D3ngHierarchicalChart */] {
    constructor() {
        super(...arguments);
        this.rootLabel = "ROOT";
        this.d3Chart = null;
    }
    drawSelection(selection) {
        if (this.d3Chart) {
            this.d3Chart.selectAll("span")
                .style("color", dataPoint => selection.selectionColor(dataPoint));
        }
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    draw() {
        const self = this;
        const data = this.computeHierarchyRoot();
        if (!data) {
            return;
        }
        const chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.chart.nativeElement);
        this.d3Chart = chart;
        makeElements(chart, data);
        function makeElements(element, node) {
            let label = self.getLabel(node);
            if (!label || label == "") {
                label = self.rootLabel;
            }
            const children = self.getChildren(node);
            const nodeContainer = element
                .append("div")
                .attr("class", (children && children.length > 0) ? "closed" : "empty")
                .datum(node);
            nodeContainer.append("i")
                .attr("class", "material-icons")
                .text((children && children.length > 0) ? "add_circle_outline" : "keyboard_arrow_right")
                .on("click", click);
            nodeContainer.append("span")
                .text(label)
                .on("click", d => self.setDirectSelection([d]));
            if (children && children.length > 0) {
                const ul = nodeContainer.append("ul");
                children.forEach(function (child) {
                    makeElements(ul.append("li"), child);
                });
            }
        }
        function click() {
            const icon = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].currentTarget;
            const nodeContainer = icon.parentNode;
            if (nodeContainer.className == "closed") {
                nodeContainer.className = "open";
                icon.innerHTML = "remove_circle_outline";
            }
            else if (nodeContainer.className == "open") {
                nodeContainer.className = "closed";
                icon.innerHTML = "add_circle_outline";
            }
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngCollapsibleIndentedTreeComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngCollapsibleIndentedTreeComponent.prototype, "rootLabel", void 0);
D3ngCollapsibleIndentedTreeComponent = D3ngCollapsibleIndentedTreeComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-collapsible-indented-tree',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngCollapsibleIndentedTreeComponent_1) }],
        template: `
    <div #chart></div>`,
        styles: [__webpack_require__(274)]
    })
], D3ngCollapsibleIndentedTreeComponent);

var D3ngCollapsibleIndentedTreeComponent_1;
//# sourceMappingURL=d3ng-collapsible-indented-tree.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_dependency_chart__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngForceGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3ngForceGraphComponent = D3ngForceGraphComponent_1 = class D3ngForceGraphComponent extends __WEBPACK_IMPORTED_MODULE_3__d3ng_dependency_chart__["a" /* D3ngDependencyChart */] {
    constructor() {
        super(...arguments);
        this.d3Chart = null;
    }
    onNodeValueChange(event) {
        this.nodeValue = event.value;
        this.clear();
        this.draw();
    }
    drawSelection(selection) {
        if (this.d3Chart) {
            this.d3Chart.selectAll("circle")
                .classed("selected", dataPoint => selection.isSelected(dataPoint.data))
                .style("stroke", dataPoint => selection.selectionColor(dataPoint.data));
        }
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    getNodeValue(node) {
        if (this.nodeValue) {
            const result = this.nodeValue ? node[this.nodeValue] : 1;
            return result ? result : 1;
        }
        else {
            return 1;
        }
    }
    color(index) {
        return __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */].colors[index % __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */].colors.length];
    }
    draw() {
        const self = this;
        if (!self.data || self.data.length == 0) {
            return;
        }
        const graph = self.computeIndexGraphFromData();
        const width = self.chart.nativeElement.offsetWidth;
        const height = self.chart.nativeElement.offsetHeight;
        const svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](self.chart.nativeElement)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        self.d3Chart = svg;
        const maxValue = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](this.data, d => this.getNodeValue(d))[1];
        const force = __WEBPACK_IMPORTED_MODULE_1_d3__["layout"].force()
            .gravity(0.05)
            .distance(80)
            .charge(-50)
            .size([width, height])
            .nodes(graph.nodes)
            .links(graph.links)
            .start();
        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", d => {
            return Math.sqrt(d.value);
        });
        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("r", d => {
            return 30 * (this.getNodeValue(d.data) / maxValue) + 3;
        })
            .attr("fill", d => self.color(d.group))
            .call(force.drag)
            .on("click", d => {
            self.setDirectSelection([d.data]);
        });
        node.append("title").text(d => self.getQualifiedLabel(d.data));
        force.on("tick", () => {
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; });
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngForceGraphComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngForceGraphComponent.prototype, "nodeValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngForceGraphComponent.prototype, "nodeDimensions", void 0);
D3ngForceGraphComponent = D3ngForceGraphComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-force-graph',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngForceGraphComponent_1) }],
        template: `
    <div class="controls">
      <md-select [(ngModel)]="nodeValue" (change)="onNodeValueChange($event)">
        <md-option *ngFor="let dim of nodeDimensions ? nodeDimensions : [nodeValue]" [value]="dim">{{ dim }}</md-option>
      </md-select>
    </div>
    <div #chart class="content"></div>`,
        styles: [__webpack_require__(275)]
    })
], D3ngForceGraphComponent);

var D3ngForceGraphComponent_1;
//# sourceMappingURL=d3ng-force-graph.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngHistogramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngHistogramComponent = class D3ngHistogramComponent extends __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__["a" /* D3ngChart */] {
    constructor() {
        super(...arguments);
        this.d3Chart = null;
    }
    drawSelected(selected) {
        if (this.d3Chart) {
            this.d3Chart.classed("selected", d => selected.indexOf(d) != -1);
        }
    }
    clear() {
    }
    draw() {
        const self = this;
        this.d3Chart = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.chart.nativeElement)
            .selectAll("p")
            .data(this.data)
            .enter().append("p")
            .text(function (d) { return "# " + d[self.property]; })
            .on("click", d => {
            self.selected = [d];
            self.selectedChange.emit(self.selected);
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngHistogramComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngHistogramComponent.prototype, "property", void 0);
D3ngHistogramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-histogram',
        template: __webpack_require__(295),
        styles: [__webpack_require__(276)]
    })
], D3ngHistogramComponent);

//# sourceMappingURL=d3ng-histogram.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngListComponent = class D3ngListComponent extends __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */] {
    constructor() {
        super(...arguments);
        this.d3Chart = null;
    }
    drawSelection(selection) {
        if (this.d3Chart) {
            this.d3Chart.style("color", dataPoint => selection.selectionColor(dataPoint));
        }
    }
    clear() {
    }
    draw() {
        const self = this;
        this.d3Chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.chart.nativeElement)
            .selectAll("p")
            .data(this.data)
            .enter().append("p")
            .text(d => "# " + self.getLabel(d))
            .on("click", d => {
            self.setDirectSelection([d]);
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngListComponent.prototype, "chart", void 0);
D3ngListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-list',
        template: `
    <div #chart></div>`,
        styles: []
    })
], D3ngListComponent);

//# sourceMappingURL=d3ng-list.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngParallelCoordinatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngParallelCoordinatesComponent = D3ngParallelCoordinatesComponent_1 = class D3ngParallelCoordinatesComponent extends __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */] {
    constructor() {
        super(...arguments);
        this.lines = null;
    }
    drawSelection(selection) {
        if (this.lines) {
            this.lines
                .style("stroke", dataPoint => selection.selectionColor(dataPoint))
                .classed("selected", dataPoint => selection.isSelected(dataPoint));
        }
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    /**
     * Fill all `dimension`s in all data objects with value 0, if no
     * value exists.
     */
    normalizeData() {
        const self = this;
        this.data.forEach(function (d) {
            self.dimensions.forEach(function (dim) {
                if (!d[dim]) {
                    d[dim] = 0;
                }
            });
        });
    }
    draw() {
        if (!this.data || !this.dimensions) {
            return;
        }
        const self = this;
        self.normalizeData();
        const m = [30, 30, 5, 30];
        const w = this.chart.nativeElement.offsetWidth - m[1] - m[3];
        const h = this.chart.nativeElement.offsetHeight - m[0] - m[2];
        const x = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].ordinal().domain(self.dimensions).rangePoints([0, w]);
        const y = {};
        const line = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].line();
        const axis = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].axis().orient("left");
        // Helper function: returns the path for a given data point.
        const path = d => line(self.dimensions.map(p => [x(p), y[p](d[p])]));
        // Add svg chart.
        const d_chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](self.chart.nativeElement);
        const svg = d_chart.append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
            .append("svg:g")
            .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
        let foreground = null;
        // Create a scale and brush for each dimension.
        self.dimensions.forEach(d => {
            self.data.forEach(p => { p[d] = +p[d]; });
            // Calculate domain with 5% extra space
            const extent = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](self.data, p => p[d]);
            const size = extent[1] - extent[0];
            extent[0] = extent[0] - size * .05;
            extent[1] = extent[1] + size * .05;
            // Create the scale
            y[d] = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].linear()
                .domain(extent)
                .range([h, 0]);
            // Create the brush
            y[d].brush = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].brush()
                .y(y[d])
                .on("brush", () => {
                // Handles a brush event, toggling the display of foreground lines.
                const actives = self.dimensions.filter(p => !y[p].brush.empty());
                const extents = actives.map(p => y[p].brush.extent());
                const selection = [];
                foreground.each(d => {
                    const selected = actives.length != 0 && actives.every((p, i) => extents[i][0] <= d[p] && d[p] <= extents[i][1]);
                    if (selected) {
                        selection.push(d);
                    }
                });
                self.setDirectSelection(selection);
            });
        });
        // Add foreground lines.
        foreground = svg.append("svg:g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(self.data)
            .enter().append("svg:path")
            .attr("d", path);
        self.lines = foreground;
        foreground.append("title").text(function (d) {
            return self.getQualifiedLabel(d);
        });
        let i = 0;
        // Add a group element for each dimension.
        const g = svg.selectAll(".dimension")
            .data(self.dimensions)
            .enter().append("svg:g")
            .attr("class", "dimension")
            .attr("transform", d => "translate(" + x(d) + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["behavior"].drag()
            .origin(d => { return { x: x(d) }; })
            .on("dragstart", d => {
            i = self.dimensions.indexOf(d);
        })
            .on("drag", d => {
            x.range()[i] = __WEBPACK_IMPORTED_MODULE_1_d3__["event"].x;
            self.dimensions.sort((a, b) => x(a) - x(b));
            g.attr("transform", d => "translate(" + x(d) + ")");
            foreground.attr("d", path);
        })
            .on("dragend", d => {
            x.domain(self.dimensions).rangePoints([0, w]);
            const t = __WEBPACK_IMPORTED_MODULE_1_d3__["transition"]().duration(500);
            t.selectAll(".dimension").attr("transform", d => "translate(" + x(d) + ")");
            t.selectAll(".foreground path").attr("d", path);
        }));
        // Add an axis and title.
        g.append("svg:g")
            .attr("class", "axis")
            .each(function (d) { __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).call(axis.scale(y[d])); })
            .append("svg:text")
            .attr("text-anchor", "middle")
            .attr("y", -9)
            .text(String);
        // Add a brush for each axis.
        g.append("svg:g")
            .attr("class", "brush")
            .each(function (d) { __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).call(y[d].brush); })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngParallelCoordinatesComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngParallelCoordinatesComponent.prototype, "dimensions", void 0);
D3ngParallelCoordinatesComponent = D3ngParallelCoordinatesComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-parallel-coordinates',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngParallelCoordinatesComponent_1) }],
        template: `
    <div #chart class="content"></div>
  `,
        styles: [__webpack_require__(277)]
    })
], D3ngParallelCoordinatesComponent);

var D3ngParallelCoordinatesComponent_1;
//# sourceMappingURL=d3ng-parallel-coordinates.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3ng_dependency_chart__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngRadialEdgeBundlingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let D3ngRadialEdgeBundlingComponent = D3ngRadialEdgeBundlingComponent_1 = class D3ngRadialEdgeBundlingComponent extends __WEBPACK_IMPORTED_MODULE_4__d3ng_dependency_chart__["a" /* D3ngDependencyChart */] {
    constructor() {
        super(...arguments);
        this.config = {};
        this.currentLocalSelection = [];
    }
    drawSelection(selection) {
        if (this.svg) {
            this.currentLocalSelection.forEach(d => this.mouseout(d));
            this.svg.selectAll(".node")
                .classed("selected", dataPoint => selection.isSelected(dataPoint.original))
                .style("fill", dataPoint => selection.selectionColor(dataPoint.original));
            this.currentLocalSelection = [];
            selection.items.forEach(item => {
                item.selected.forEach(dataPoint => {
                    if (this.currentLocalSelection.indexOf(dataPoint) == -1) {
                        this.currentLocalSelection.push(dataPoint);
                        this.mouseover(dataPoint);
                    }
                });
            });
        }
    }
    onTensionChange(event) {
        this.line.tension(event.value / 100);
        this.path.attr("d", (d, i) => this.line(this.splines[i]));
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    getId(node) {
        return super.getId(node).replace(/\//g, "-");
    }
    draw() {
        const self = this;
        if (!this.data || this.data.length == 0) {
            return;
        }
        const textWidth = (this.config && this.config.textWidth) ? this.config.textWidth : 80;
        const shortenLength = (this.config && this.config.shortenLength) ? this.config.shortenLength : -1;
        let width = this.chart.nativeElement.offsetWidth, height = this.chart.nativeElement.offsetHeight;
        if (height < width && height > 0) {
            width = height;
        }
        else {
            height = width;
        }
        const viewMapping = {};
        const rx = width / 2, ry = height / 2;
        let m0, rotate = 0;
        const cluster = __WEBPACK_IMPORTED_MODULE_1_d3__["layout"].cluster()
            .size([360, ry - textWidth])
            .sort((a, b) => __WEBPACK_IMPORTED_MODULE_1_d3__["ascending"](self.getId(a.original), self.getId(b.original)));
        const bundle = __WEBPACK_IMPORTED_MODULE_1_d3__["layout"].bundle();
        this.line = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].line.radial()
            .interpolate("bundle")
            .tension(.85)
            .radius(d => viewMapping[self.getId(d)].y)
            .angle(d => viewMapping[self.getId(d)].x / 180 * Math.PI);
        const div = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.chart.nativeElement).insert("div", "h2")
            .style("width", width + "px")
            .style("height", width + "px");
        const svg = div.append("svg:svg")
            .attr("width", width)
            .attr("height", width)
            .append("svg:g")
            .attr("transform", "translate(" + rx + "," + ry + ")");
        this.svg = svg;
        svg.append("svg:path")
            .attr("class", "arc")
            .attr("d", __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].arc().outerRadius(ry - textWidth).innerRadius(0).startAngle(0).endAngle(2 * Math.PI))
            .on("mousedown", mousedown);
        const root = __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__["a" /* D3ngHierarchicalChart */].computeHierarchyRoot(self, this.data);
        const view = __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__["a" /* D3ngHierarchicalChart */].createHierarchyView(self, root, viewMapping, d => self.getId(d));
        const nodes = cluster.nodes(view);
        const links = this.computeObjectGraphFromData().links;
        this.splines = bundle(links);
        this.path = svg.selectAll("path.link")
            .data(links)
            .enter().append("svg:path")
            .attr("class", d => "link source-" + self.getId(d.source) + " target-" + self.getId(d.target))
            .attr("d", (d, i) => this.line(this.splines[i]));
        const shorten = function (s, n) {
            return (n > 0 && s.length > n) ? s.substr(0, n - 5) + '...' + s.substr(s.length - 3, s.length) : s;
        };
        svg.selectAll("g.node")
            .data(nodes.filter(function (n) {
            return !n.children;
        }))
            .enter().append("svg:g")
            .attr("class", "node")
            .attr("id", d => d.original.id)
            .attr("transform", d => "rotate(" + (d.x - 90) + ")translate(" + d.y + ")")
            .append("svg:text")
            .attr("dx", d => d.x < 180 ? 8 : -8)
            .attr("dy", ".31em")
            .attr("text-anchor", d => d.x < 180 ? "start" : "end")
            .attr("transform", d => d.x < 180 ? null : "rotate(180)")
            .text(d => shorten(self.getLabel(d.original), shortenLength))
            .on("mouseover", d => self.mouseover(d.original))
            .on("mouseout", d => {
            if (this.currentLocalSelection.indexOf(d.original) == -1) {
                self.mouseout(d.original);
            }
        })
            .on("click", (d) => {
            self.setDirectSelection([d.original]);
        });
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](window)
            .on("mousemove", mousemove)
            .on("mouseup", mouseup);
        function mouse(e) {
            return [e.pageX - rx, e.pageY - ry];
        }
        function mousedown() {
            m0 = mouse(__WEBPACK_IMPORTED_MODULE_1_d3__["event"]);
            __WEBPACK_IMPORTED_MODULE_1_d3__["event"].preventDefault();
        }
        function mousemove() {
            if (m0) {
                const m1 = mouse(__WEBPACK_IMPORTED_MODULE_1_d3__["event"]), dm = Math.atan2(cross(m0, m1), dot(m0, m1)) * 180 / Math.PI;
                div.style("-webkit-transform", "translateY(" + (ry - rx) + "px)rotateZ(" + dm + "deg)translateY(" + (rx - ry) + "px)");
            }
        }
        function mouseup() {
            if (m0) {
                const m1 = mouse(__WEBPACK_IMPORTED_MODULE_1_d3__["event"]);
                rotate += Math.atan2(cross(m0, m1), dot(m0, m1)) * 180 / Math.PI;
                if (rotate > 360) {
                    rotate -= 360;
                }
                else if (rotate < 0) {
                    rotate += 360;
                }
                m0 = null;
                div.style("-webkit-transform", null);
                svg
                    .attr("transform", "translate(" + rx + "," + ry + ")rotate(" + rotate + ")")
                    .selectAll("g.node text")
                    .attr("dx", function (d) {
                    return (d.x + rotate) % 360 < 180 ? 8 : -8;
                })
                    .attr("text-anchor", function (d) {
                    return (d.x + rotate) % 360 < 180 ? "start" : "end";
                })
                    .attr("transform", function (d) {
                    return (d.x + rotate) % 360 < 180 ? null : "rotate(180)";
                });
            }
        }
        function cross(a, b) {
            return a[0] * b[1] - a[1] * b[0];
        }
        function dot(a, b) {
            return a[0] * b[0] + a[1] * b[1];
        }
    }
    mouseover(d) {
        this.svg.selectAll("path.link.target-" + this.getId(d))
            .classed("target", true)
            .each(this.updateNodes("source", true));
        this.svg.selectAll("path.link.source-" + this.getId(d))
            .classed("source", true)
            .each(this.updateNodes("target", true));
    }
    mouseout(d) {
        this.svg.selectAll("path.link.source-" + this.getId(d))
            .classed("source", false)
            .each(this.updateNodes("target", false));
        this.svg.selectAll("path.link.target-" + this.getId(d))
            .classed("target", false)
            .each(this.updateNodes("source", false));
    }
    updateNodes(name, value) {
        const self = this;
        return function (d) {
            if (value) {
                this.parentNode.appendChild(this);
            }
            self.svg.select("#node-" + self.getId(d[name])).classed(name, value);
        };
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngRadialEdgeBundlingComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('container'),
    __metadata("design:type", Object)
], D3ngRadialEdgeBundlingComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngRadialEdgeBundlingComponent.prototype, "config", void 0);
D3ngRadialEdgeBundlingComponent = D3ngRadialEdgeBundlingComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-radial-edge-bundling',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngRadialEdgeBundlingComponent_1) }],
        template: `    
    <div class="controls">
      <md-slider min="0" max="100" value="85" (change)="onTensionChange($event)"></md-slider>
    </div>
    <div #chart class="content"></div>
  `,
        styles: [__webpack_require__(278)]
    })
], D3ngRadialEdgeBundlingComponent);

var D3ngRadialEdgeBundlingComponent_1;
//# sourceMappingURL=d3ng-radial-edge-bundling.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngScatterPlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngScatterPlotComponent = D3ngScatterPlotComponent_1 = class D3ngScatterPlotComponent extends __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */] {
    constructor() {
        super(...arguments);
        this.d3Chart = null;
        this.config = {};
    }
    onXChange(event) {
        this.x = event.value;
        this.clear();
        this.draw();
    }
    onYChange(event) {
        this.y = event.value;
        this.clear();
        this.draw();
    }
    drawSelection(selection) {
        if (this.d3Chart) {
            this.d3Chart.selectAll("circle").style("fill", dataPoint => selection.selectionColor(dataPoint));
        }
    }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    /**
     * Fill all `dimension`s in all data objects with value 0, if no
     * value exists.
     */
    normalizeData() {
        const self = this;
        this.data.forEach(function (d) {
            [self.x, self.y].forEach(function (dim) {
                if (!d[dim]) {
                    d[dim] = 0;
                }
            });
        });
    }
    draw() {
        if (!this.data) {
            return;
        }
        if (!this.x || !this.y) {
            if (!this.dimensions || this.dimensions.length <= 1) {
                return;
            }
            this.x = this.dimensions[0];
            this.y = this.dimensions[1];
        }
        const self = this;
        self.normalizeData();
        const margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = this.chart.nativeElement.offsetWidth - margin.left - margin.right, height = this.chart.nativeElement.offsetHeight - margin.top - margin.bottom;
        const scales = {};
        scales.x = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].linear().range([0, width]);
        scales.y = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].linear().range([height, 0]);
        const xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].axis().scale(scales.x).orient("bottom");
        const yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].axis().scale(scales.y).orient("left");
        if (this.config.ticks) {
            xAxis.ticks(this.config.ticks[0]);
            yAxis.ticks(this.config.ticks[1]);
        }
        const d_chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](self.chart.nativeElement);
        const svg = d_chart.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        this.d3Chart = svg;
        if (this.config.extent) {
            scales['x'].domain(this.config.extent[0]).nice();
            scales['y'].domain(this.config.extent[1]).nice();
        }
        else {
            ["x", "y"].forEach(function (dim) {
                const extent = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](self.data, d => d[self[dim]]);
                const size = extent[1] - extent[0];
                extent[0] = extent[0] - size * .05;
                extent[1] = extent[1] + size * .05;
                scales[dim].domain(extent).nice();
            });
        }
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        svg.selectAll(".dot")
            .data(self.data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function (d) { return scales.x(d[self.x]); })
            .attr("cy", function (d) { return scales.y(d[self.y]); })
            .append("title").text(function (d) {
            return self.getQualifiedLabel(d);
        });
        const brush = __WEBPACK_IMPORTED_MODULE_1_d3__["svg"].brush()
            .x(scales.x).y(scales.y)
            .on("brush", () => {
            const e = brush.extent();
            const selection = [];
            self.data.forEach(d => {
                if (!(e[0][0] > d[self.x] || d[self.x] > e[1][0] || e[0][1] > d[self.y] || d[self.y] > e[1][1])) {
                    selection.push(d);
                }
            });
            self.setDirectSelection(selection);
        });
        svg.append("g").call(brush);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngScatterPlotComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngScatterPlotComponent.prototype, "x", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngScatterPlotComponent.prototype, "y", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngScatterPlotComponent.prototype, "dimensions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngScatterPlotComponent.prototype, "config", void 0);
D3ngScatterPlotComponent = D3ngScatterPlotComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-scatter-plot',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngScatterPlotComponent_1) }],
        template: `
    <div class="y-controls">
      <md-select [(ngModel)]="y" (change)="onYChange($event)">
        <md-option *ngFor="let dim of dimensions ? dimensions : [y]" [value]="dim">{{ dim }}</md-option>
      </md-select>
    </div>
    <div class="x-controls">
      <md-select [(ngModel)]="x" (change)="onXChange($event)">
        <md-option *ngFor="let dim of dimensions ? dimensions : [x]" [value]="dim">{{ dim }}</md-option>
      </md-select>
    </div>
    <div #chart class="content"></div>`,
        styles: [__webpack_require__(279)]
    })
], D3ngScatterPlotComponent);

var D3ngScatterPlotComponent_1;
//# sourceMappingURL=d3ng-scatter-plot.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngSourceDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let D3ngSourceDirective = class D3ngSourceDirective {
    constructor(_view) {
        this._view = _view;
        /**
         * The `pattern` is used for two things. First, it is used to select a
         * subset of data points from the data `source`. This subset of
         * data points is represented in this chart. Second, the pattern
         * influences the selection behavior for this chart.
         * The default pattern is a wildcard pattern that selects all nodes
         * from the `source` data.
         *
         * Syntax:
         * type_ref := ID|'.'
         * segment := '!'? type_ref ('!'? '[' '!'? type_ref ']')? '+'?
         * pattern := segment ('/' segment)*
         */
        this.pattern = ".";
        /**
         * The key used to determine the type of a `source` data node.
         */
        this.typeKey = "type";
        /**
         * The key used to determine the children of a `source` data node.
         */
        this.childKey = "children";
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        /**
         * Also updates the associated chart if the filtered data is empty.
         * @type {boolean}
         */
        this.allowEmpty = false;
    }
    /**
     * Returns the type of the given `source` data node.
     * The default implementation uses `typeKey`.
     */
    getType(node) {
        return node[this.typeKey];
    }
    /**
     * Returns the children of a `source` data node. The default implementation
     * assumes each node with children has the `childKey` with an array of
     * child data nodes. Returns empty array, if no children are found.
     */
    getChildren(node) {
        const result = node[this.childKey];
        if (result) {
            return result;
        }
        else {
            return [];
        }
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("pattern")) {
            this.updatePattern();
        }
        if (changes.hasOwnProperty("source")) {
            this.onChanged();
        }
    }
    typeMatches(element, patternTerm) {
        if (patternTerm.isTypeNegated) {
            return !(patternTerm.type == "." || this.getType(element) == patternTerm.type);
        }
        else {
            return patternTerm.type == "." || this.getType(element) == patternTerm.type;
        }
    }
    addMatches(element, results, index, findAll) {
        const patternTerm = this.parsedPattern[index];
        const isLast = index + 1 == this.parsedPattern.length;
        let hasMatch = false;
        if (this.typeMatches(element, patternTerm)) {
            const children = this.getChildren(element);
            if (isLast) {
                if (patternTerm.limit) {
                    const limitMatches = !children.every(c => !this.typeMatches(c, patternTerm.limit));
                    if (patternTerm.limit.isNegated && !limitMatches) {
                        hasMatch = true;
                        results.push(element);
                    }
                    else if (!patternTerm.limit.isNegated && limitMatches) {
                        hasMatch = true;
                        results.push(element);
                    }
                }
                else {
                    hasMatch = true;
                    results.push(element);
                }
            }
            else {
                this.getChildren(element).forEach(c => {
                    if (this.addMatches(c, results, index + 1, findAll)) {
                        hasMatch = true;
                    }
                });
            }
            if (!hasMatch || findAll || patternTerm.notFlat) {
                children.forEach(c => {
                    if (this.addMatches(c, results, index, findAll)) {
                        hasMatch = true;
                    }
                    ;
                });
            }
            return hasMatch;
        }
    }
    /**
     * Updates the `data` property by applying the current `parsedPattern` to
     * `source`.
     */
    onChanged() {
        if (this.source && (this.source.length > 0 || this.allowEmpty) && this.parsedPattern) {
            this.ensureParents();
            const results = [];
            this.source.forEach(sourceItem => {
                if (sourceItem) {
                    this.addMatches(sourceItem, results, 0, true);
                }
            });
            if (results.length > 0 || this.allowEmpty) {
                if (this.chart) {
                    this.chart.setData(results);
                }
                this.dataChange.emit(results);
            }
        }
    }
    ensureParents() {
        const self = this;
        this.source.forEach(sourceItem => {
            sourceItem["parent"] = null;
            function visit(d) {
                self.getChildren(d).forEach(function (c) {
                    if (!c.parent) {
                        c.parent = d;
                        visit(c);
                    }
                });
            }
            visit(sourceItem);
        });
    }
    updatePattern() {
        try {
            this.parsedPattern = D3ngPatternParser.parse(this.pattern);
            this.onChanged();
        }
        catch (e) { }
    }
    ngOnInit() {
        try {
            this.chart = this._view._data.componentView.component;
        }
        catch (e) {
        }
        this.updatePattern();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngSourceDirective.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngSourceDirective.prototype, "pattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngSourceDirective.prototype, "typeKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngSourceDirective.prototype, "childKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], D3ngSourceDirective.prototype, "dataChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], D3ngSourceDirective.prototype, "allowEmpty", void 0);
D3ngSourceDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[d3ngSource]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _a || Object])
], D3ngSourceDirective);

var _a;
//# sourceMappingURL=d3ng-source.directive.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngTreeMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let D3ngTreeMapComponent = D3ngTreeMapComponent_1 = class D3ngTreeMapComponent extends __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__["a" /* D3ngHierarchicalChart */] {
    constructor() {
        super(...arguments);
        this.doZoom = false;
        this.cell = null;
        this.color = null;
    }
    onValueChange(event) {
        this.value = event.value;
        this.clear();
        this.draw();
    }
    getValue(node) {
        if (this.value) {
            const result = node.original[this.value];
            return result ? result : 1;
        }
        else {
            return 1;
        }
    }
    drawSelection(selection) {
        if (this.cell) {
            this.cell.select("rect").style("fill", dataPoint => {
                const color = selection.selectionColor(dataPoint.original);
                if (color == "black") {
                    return this.color(this.getLabel(dataPoint.original.parent));
                }
                else {
                    return color;
                }
            });
        }
    }
    // protected drawSelected(selected: Array<any>) {
    //   const self = this;
    //   if (self.data && self.cell) {
    //     const selectedWithNoChildSelected = [];
    //
    //     const everyWithAll = (list: Array<Object>, predicate: (Object) => boolean) => {
    //       let overallResult = true;
    //       for (let i = 0; i < list.length; i++) {
    //         const result = predicate(list[i]);
    //         overallResult = result && overallResult;
    //       }
    //       return overallResult;
    //     };
    //
    //     const notSelected = d => {
    //       const children = self.getChildren(d);
    //       let childNotSelected = true;
    //       if (children) {
    //         childNotSelected = everyWithAll(children, function(c) {
    //           return notSelected(c);
    //         });
    //       }
    //       const selfSelected = selected.indexOf(d) != -1;
    //       if (selfSelected && childNotSelected) {
    //         selectedWithNoChildSelected.push(d);
    //       }
    //       return childNotSelected && !selfSelected;
    //     };
    //     notSelected(this.computeHierarchyRoot());
    //
    //     this.cell.classed("selected", d => {
    //       while (d) {
    //         if (selectedWithNoChildSelected.indexOf(d.original) != -1) {
    //           return true;
    //         }
    //         d = d.parent;
    //       }
    //       return false;
    //     });
    //   }
    // }
    clear() {
        this.chart.nativeElement.innerHTML = "";
    }
    draw() {
        const self = this;
        const data = this.computeHierarchyRoot();
        if (!data) {
            return;
        }
        const w = this.chart.nativeElement.offsetWidth;
        const h = this.chart.nativeElement.offsetHeight;
        const x = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].linear().range([0, w]), y = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].linear().range([0, h]), color = __WEBPACK_IMPORTED_MODULE_1_d3__["scale"].ordinal().range(__WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */].colors);
        let root, node;
        this.color = color;
        const treemap = __WEBPACK_IMPORTED_MODULE_1_d3__["layout"].treemap()
            .round(false)
            .size([w, h])
            .sticky(true)
            .children(function (d) {
            return self.getChildren(d);
        })
            .value(function (d) {
            return self.getValue(d);
        });
        // Add svg chart.
        const d_chart = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.chart.nativeElement);
        const svg = d_chart.append("div")
            .attr("class", "chart")
            .style("width", w + "px")
            .style("height", h + "px")
            .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .append("svg:g")
            .attr("transform", "translate(.5,.5)");
        node = root = data;
        const view = __WEBPACK_IMPORTED_MODULE_3__d3ng_hierarchical_chart__["a" /* D3ngHierarchicalChart */].createUniDirectionalHierarchyView(this, root);
        const nodes = treemap.nodes(view)
            .filter(function (d) {
            return self.data.indexOf(d.original) != -1;
        });
        const cell = svg.selectAll("g")
            .data(nodes)
            .enter().append("svg:g")
            .attr("class", "cell")
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
            .on("click", function (d) {
            if (self.doZoom) {
                zoom(node == d.parent ? view : d.parent);
            }
            self.setDirectSelection([d.original]);
        });
        self.cell = cell;
        cell.append("svg:rect")
            .attr("width", function (d) { return d.dx - 1; })
            .attr("height", function (d) { return d.dy - 1; })
            .style("fill", function (d) { return color(self.getLabel(d.original.parent)); });
        cell.append("svg:text")
            .attr("x", function (d) { return d.dx / 2; })
            .attr("y", function (d) { return d.dy / 2; })
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(function (d) { return self.getLabel(d.original); })
            .style("opacity", function (d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });
        // Add a mouseover title.
        cell.append("title").text(function (d) {
            return self.getQualifiedLabel(d.original);
        });
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](window).on("click", function () {
            if (self.doZoom) {
                zoom(view);
            }
        });
        function zoom(d) {
            const kx = w / d.dx, ky = h / d.dy;
            x.domain([d.x, d.x + d.dx]);
            y.domain([d.y, d.y + d.dy]);
            const t = svg.selectAll("g.cell").transition()
                .duration(__WEBPACK_IMPORTED_MODULE_1_d3__["event"].altKey ? 7500 : 750)
                .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });
            t.select("rect")
                .attr("width", function (d) { return kx * d.dx - 1; })
                .attr("height", function (d) { return ky * d.dy - 1; });
            t.select("text")
                .attr("x", function (d) { return kx * d.dx / 2; })
                .attr("y", function (d) { return ky * d.dy / 2; })
                .style("opacity", function (d) { return kx * d.dx > d.w ? 1 : 0; });
            node = d;
            __WEBPACK_IMPORTED_MODULE_1_d3__["event"].stopPropagation();
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('chart'),
    __metadata("design:type", Object)
], D3ngTreeMapComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngTreeMapComponent.prototype, "doZoom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngTreeMapComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngTreeMapComponent.prototype, "dimensions", void 0);
D3ngTreeMapComponent = D3ngTreeMapComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-tree-map',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* forwardRef */])(() => D3ngTreeMapComponent_1) }],
        template: `
    <div class="controls">
      <md-select [(ngModel)]="value" (change)="onValueChange($event)">
        <md-option *ngFor="let dim of dimensions ? dimensions : [value]" [value]="dim">{{ dim }}</md-option>
      </md-select>
    </div>
    <div #chart class="content"></div>`,
        styles: [__webpack_require__(280)]
    })
], D3ngTreeMapComponent);

var D3ngTreeMapComponent_1;
//# sourceMappingURL=d3ng-tree-map.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngChordDiagramDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngChordDiagramDemoComponent = class D3ngChordDiagramDemoComponent {
    constructor() {
        this.data = [
            {
                id: "a",
                label: "DefaulA",
                color: "#f22",
                dependencies: [
                    { id: "a", value: 3 },
                    { id: "b", value: 4 },
                    { id: "c", value: 10 }
                ]
            },
            {
                id: "b",
                label: "BarB",
                color: "#2f2",
                dependencies: [
                    { id: "a", value: 1 },
                    { id: "c", value: 3 }
                ]
            },
            {
                id: "c",
                label: "FooC",
                color: "#22f",
                dependencies: [
                    { id: "a", value: 6 },
                    { id: "b", value: 3 },
                    { id: "c", value: 1 }
                ]
            },
        ];
    }
};
D3ngChordDiagramDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-chord-diagram-demo',
        template: `
    <h2>D3ng Chord Diagram Demo</h2>
    <d3ng-chord-diagram [data]="data" [(selected)]="selection"></d3ng-chord-diagram>
  `,
        styles: ['d3ng-chord-diagram { width : 300px; }']
    })
], D3ngChordDiagramDemoComponent);

//# sourceMappingURL=d3ng-chord-diagram-demo.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngCollapsibleIndentedTreeDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngCollapsibleIndentedTreeDemoComponent = class D3ngCollapsibleIndentedTreeDemoComponent {
    constructor(http) {
        this.source = [];
        http.get('/assets/tree-map-demo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.source = res;
        });
    }
};
D3ngCollapsibleIndentedTreeDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-collapsible-indented-tree-demo',
        template: `
    <h2>D3ng collapsible indented tree Demo</h2>
    <div class="chart-container">
      <d3ng-collapsible-indented-tree d3ngSource [source]="source" pattern="." [(selected)]="selection" labelKey="name"></d3ng-collapsible-indented-tree>
    </div>
  `,
        styles: []
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], D3ngCollapsibleIndentedTreeDemoComponent);

var _a;
//# sourceMappingURL=d3ng-collapsible-indented-tree-demo.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngForceGraphDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngForceGraphDemoComponent = class D3ngForceGraphDemoComponent {
    constructor() {
        this.data = [
            {
                id: "a",
                label: "DefaulA",
                color: "#f22",
                dependencies: [
                    { id: "a", value: 3 },
                    { id: "b", value: 4 },
                    { id: "c", value: 10 }
                ]
            },
            {
                id: "b",
                label: "BarB",
                color: "#2f2",
                dependencies: [
                    { id: "a", value: 1 },
                    { id: "c", value: 3 }
                ]
            },
            {
                id: "c",
                label: "FooC",
                color: "#22f",
                dependencies: [
                    { id: "a", value: 6 },
                    { id: "b", value: 3 },
                    { id: "c", value: 1 }
                ]
            },
        ];
    }
};
D3ngForceGraphDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-force-graph-demo',
        template: `
    <h2>D3ng Force Graph Demo</h2>
    <d3ng-force-graph [data]="data" [(selected)]="selection"></d3ng-force-graph>
  `,
        styles: ['d3ng-force-graph { width: 400px; height: 600px; }']
    })
], D3ngForceGraphDemoComponent);

//# sourceMappingURL=d3ng-force-graph-demo.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngHistogramDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngHistogramDemoComponent = class D3ngHistogramDemoComponent {
    constructor() {
        this.listData = [
            { a: "One", b: 2, c: "++" },
            { a: "Two" },
            { a: "Two" },
            { a: "Threes" },
            { a: "Threes" },
            { a: "Four" },
            { a: "One" },
            { a: "One" },
            { a: "One" },
        ];
    }
};
D3ngHistogramDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-histogram-demos',
        template: `
    <h2>D3ng Histogram Demo</h2>
    <d3ng-histogram [data]="listData" [(selected)]="selection" property="a"></d3ng-histogram>
    
    <h3>Control list</h3>
    <d3ng-list [data]="listData" [(selected)]="selection" labelKey="a"></d3ng-list>
  `,
        styles: ['d3ng-histogram { height : 300px; display:block; }']
    })
], D3ngHistogramDemoComponent);

//# sourceMappingURL=d3ng-histogram-demo.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngListDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngListDemoComponent = class D3ngListDemoComponent {
    constructor() {
        this.label = function (d) {
            return d;
        };
        this.listData = [
            "One",
            "Two",
            "Three",
            "Four"
        ];
    }
};
D3ngListDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-list-demos',
        template: `
    <h2>D3ng List Demo</h2>
    <h3>A list</h3>
    <d3ng-list [data]="listData" [(selected)]="selection" [customLabel]="label"></d3ng-list>
    <h3>A list connected with the other list</h3>
    <d3ng-list [data]="listData" [(selected)]="selection" [customLabel]="label"></d3ng-list>
  `,
        styles: []
    })
], D3ngListDemoComponent);

//# sourceMappingURL=d3ng-list-demo.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngParallelCoordinatesDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngParallelCoordinatesDemoComponent = class D3ngParallelCoordinatesDemoComponent {
    constructor() {
        this.data = [
            { id: "a", a: 10, b: 20, c: 5 },
            { id: "b", a: 12, b: 10, c: 7 },
            { id: "c", a: 8, b: 15, c: 14 },
            { id: "e", a: 2, b: 14, c: 8 },
            { id: "f", a: 12.2, b: 11, c: 3.2 },
        ];
    }
};
D3ngParallelCoordinatesDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-parallel-coordinates-demo',
        template: `
    <h2>D3ng Parallel Coordinates Demo</h2>
    <d3ng-parallel-coordinates [data]="data" [dimensions]="[ 'a', 'b', 'c' ]" [(selected)]="selection"></d3ng-parallel-coordinates>
  `,
        styles: ['d3ng-parallel-coordinates { height : 300px; }']
    })
], D3ngParallelCoordinatesDemoComponent);

//# sourceMappingURL=d3ng-parallel-coordinates-demo.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngPatternDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngPatternDemoComponent = class D3ngPatternDemoComponent {
    constructor(http) {
        this.source = [];
        http.get('/assets/de.hub.srcrepo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.source = res;
        });
    }
};
D3ngPatternDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-pattern-demo',
        template: `
    <h2>D3ng pattern Demo</h2>
    <d3ng-list d3ngSource [source]="source" pattern="package[!type]" [(selected)]="selection"></d3ng-list>
  `,
        styles: []
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], D3ngPatternDemoComponent);

var _a;
//# sourceMappingURL=d3ng-pattern-demo.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngRadialEdgeBundlingDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngRadialEdgeBundlingDemoComponent = class D3ngRadialEdgeBundlingDemoComponent {
    constructor(http) {
        this.data = {};
        http.get('/assets/de.hub.srcrepo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.data = res;
        });
    }
};
D3ngRadialEdgeBundlingDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-radial-edge-bundling-demo',
        template: `
    <h2>D3ng Radial Edge Bundling Demo</h2>
    <d3ng-radial-edge-bundling d3ngSource [source]="data" pattern="package/type" [(selected)]="selection"></d3ng-radial-edge-bundling>
  `,
        styles: ['d3ng-radial-edge-bundling { width : 600px; }']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], D3ngRadialEdgeBundlingDemoComponent);

var _a;
//# sourceMappingURL=d3ng-radial-edge-bundling-demo.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngScatterPlotDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let D3ngScatterPlotDemoComponent = class D3ngScatterPlotDemoComponent {
    constructor() {
        this.data = [
            { id: "a", a: 10, b: 20, c: 5 },
            { id: "b", a: 12, b: 10, c: 7 },
            { id: "c", a: 8, b: 15, c: 14 },
            { id: "e", a: 2, b: 14, c: 8 },
            { id: "f", a: 12.2, b: 11, c: 3.2 },
        ];
    }
};
D3ngScatterPlotDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-scatter-plot-demo',
        template: `
    <h2>D3ng Scatter Plot Demo</h2>
    <d3ng-scatter-plot [data]="data" x="a" y="b" [(selected)]="selection"></d3ng-scatter-plot>
  `,
        styles: ['d3ng-scatter-plot { height : 300px; display:block; }']
    })
], D3ngScatterPlotDemoComponent);

//# sourceMappingURL=d3ng-scatter-plot-demo.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngTreeMapDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let D3ngTreeMapDemoComponent = class D3ngTreeMapDemoComponent {
    constructor(http) {
        this.source = [];
        http.get('/assets/tree-map-demo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.source = res;
        });
    }
};
D3ngTreeMapDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-tree-map-demo',
        template: `
    <h2>D3ng tree map Demo</h2>
    <div class="chart-container">
      <d3ng-tree-map d3ngSource [source]="source" pattern=".![.]" [(selected)]="selection" labelKey="name"></d3ng-tree-map>
    </div>
  `,
        styles: ['.chart-container { height: 300px; }']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], D3ngTreeMapDemoComponent);

var _a;
//# sourceMappingURL=d3ng-tree-map-demo.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_d3ng_components_module__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3ng_stories_d3ng_stories_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3ng_selection_group_story_d3ng_selection_group_story_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3ng_input_selection_story_d3ng_input_selection_story_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__d3ng_story_d3ng_story_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__d3ng_overlapping_groups_story_d3ng_overlapping_groups_story_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__d3ng_mixed_levels_story_d3ng_mixed_levels_story_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__d3ng_comparison_story_d3ng_comparison_story_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngStoriesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const storiesRouting = __WEBPACK_IMPORTED_MODULE_6__d3ng_stories_d3ng_stories_component__["a" /* D3ngStoriesComponent */].stories;
/* harmony export (immutable) */ __webpack_exports__["b"] = storiesRouting;

let D3ngStoriesModule = class D3ngStoriesModule {
};
D3ngStoriesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__components_d3ng_components_module__["a" /* D3ngComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(storiesRouting),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__d3ng_stories_d3ng_stories_component__["a" /* D3ngStoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__d3ng_selection_group_story_d3ng_selection_group_story_component__["a" /* D3ngSelectionGroupStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__d3ng_input_selection_story_d3ng_input_selection_story_component__["a" /* D3ngInputSelectionStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__d3ng_story_d3ng_story_component__["a" /* D3ngStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__d3ng_overlapping_groups_story_d3ng_overlapping_groups_story_component__["a" /* D3ngOverlappingGroupsStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__d3ng_mixed_levels_story_d3ng_mixed_levels_story_component__["a" /* D3ngMixedLevelsStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__d3ng_comparison_story_d3ng_comparison_story_component__["a" /* D3ngComparisonStoryComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__d3ng_stories_d3ng_stories_component__["a" /* D3ngStoriesComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__d3ng_stories_d3ng_stories_component__["a" /* D3ngStoriesComponent */]],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* NO_ERRORS_SCHEMA */]] // necessary for transclusion with new tag names
    })
], D3ngStoriesModule);

//# sourceMappingURL=d3ng-stories.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TJsonViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TJsonViewerComponent = class TJsonViewerComponent {
    constructor() {
        this.asset = [];
    }
    ngOnInit() {
        this.onChanged();
    }
    onChanged() {
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"](this.json) && !__WEBPACK_IMPORTED_MODULE_1_lodash__["isArray"](this.json)) {
            this.json = {};
            // return;
        }
        /**
         * Convert json to array of items
         */
        this.asset = [];
        Object.keys(this.json).forEach((key) => {
            this.asset.push(this.createItem(key, this.json[key]));
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty("json")) {
            this.onChanged();
        }
    }
    /**
     * Check value and Create item object
     * @param {string|any} key
     * @param {any} value
     */
    createItem(key, value) {
        let item = {
            key: key || '""',
            value: value,
            title: value,
            type: undefined,
            isOpened: false // closed by default
        };
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isString"](item.value)) {
            item.type = 'string';
            item.title = `"${item.value}"`;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNumber"](item.value)) {
            item.type = 'number';
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isBoolean"](item.value)) {
            item.type = 'boolean';
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isDate"](item.value)) {
            item.type = 'date';
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"](item.value)) {
            item.type = 'function';
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isArray"](item.value)) {
            item.type = 'array';
            item.title = `Array[${item.value.length}]`; //${JSON.stringify(item.value)}`;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"](item.value)) {
            item.type = 'object';
            item.title = `Object`; // ${JSON.stringify(item.value)}`;
        }
        else if (item.value === null) {
            item.type = 'null';
            item.title = 'null';
        }
        else if (item.value === undefined) {
            item.type = 'undefined';
            item.title = 'undefined';
        }
        item.title = '' + item.title; // defined type or 'undefined'
        return item;
    }
    /**
     * Check item's type for Array or Object
     * @param {Item} item
     * @return {boolean}
     */
    isObject(item) {
        return ['object', 'array'].indexOf(item.type) !== -1;
    }
    /**
     * Handle click event on collapsable item
     * @param {Item} item
     */
    clickHandle(item) {
        if (!this.isObject(item)) {
            return;
        }
        item.isOpened = !item.isOpened;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TJsonViewerComponent.prototype, "json", void 0);
TJsonViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 't-json-viewer',
        template: __webpack_require__(303),
        styles: [__webpack_require__(289)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], TJsonViewerComponent);

//# sourceMappingURL=t-json-viewer.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_json_viewer_component_t_json_viewer_component__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TJsonViewerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TJsonViewerModule = class TJsonViewerModule {
};
TJsonViewerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__t_json_viewer_component_t_json_viewer_component__["a" /* TJsonViewerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__t_json_viewer_component_t_json_viewer_component__["a" /* TJsonViewerComponent */]
        ]
    })
], TJsonViewerModule);

//# sourceMappingURL=t-json-viewer.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_d3ng_chart__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_workbench_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngWorkbenchItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let D3ngWorkbenchItemComponent = class D3ngWorkbenchItemComponent {
    constructor(workbench) {
        this.workbench = workbench;
    }
    onRemoveClicked() {
        this.workbench.removeItem(this.index);
    }
    onResizeStop() {
        this.workbenchItem.redraw();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngWorkbenchItemComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], D3ngWorkbenchItemComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngWorkbenchItemComponent.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngWorkbenchItemComponent.prototype, "pattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngWorkbenchItemComponent.prototype, "component", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngWorkbenchItemComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], D3ngWorkbenchItemComponent.prototype, "groups", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_component__["a" /* D3ngGroupContext */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_component__["a" /* D3ngGroupContext */]) === "function" && _a || Object)
], D3ngWorkbenchItemComponent.prototype, "context", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('item'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__components_d3ng_chart__["a" /* D3ngChart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_d3ng_chart__["a" /* D3ngChart */]) === "function" && _b || Object)
], D3ngWorkbenchItemComponent.prototype, "workbenchItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* HostListener */])('onResizeStop', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], D3ngWorkbenchItemComponent.prototype, "onResizeStop", null);
D3ngWorkbenchItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-workbench-item',
        template: __webpack_require__(304),
        styles: [__webpack_require__(290)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */]) === "function" && _c || Object])
], D3ngWorkbenchItemComponent);

var _a, _b, _c;
//# sourceMappingURL=d3ng-workbench-item.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_grid__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_d3ng_components_module__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3ng_workbench_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3ng_workbench_item_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__t_json_viewer_t_json_viewer_module__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngWorkbenchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let D3ngWorkbenchModule = class D3ngWorkbenchModule {
};
D3ngWorkbenchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__d3ng_workbench_item_component__["a" /* D3ngWorkbenchItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_grid__["NgGridModule"],
            __WEBPACK_IMPORTED_MODULE_6__components_d3ng_components_module__["a" /* D3ngComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__t_json_viewer_t_json_viewer_module__["a" /* TJsonViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */]],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_7__d3ng_workbench_component__["a" /* D3ngWorkbenchComponent */]]
    })
], D3ngWorkbenchModule);

//# sourceMappingURL=d3ng-workbench.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  overflow: hidden;\n}\n\nh1 {\n  font-size: 14px;\n  padding-top: 30px;\n  padding-bottom: 15px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/*\n  Simple Grid\n  Project Page - http://thisisdallas.github.com/Simple-Grid/\n  Author - Dallas Bass\n  Site - http://dallasbass.com\n*/\n\n\n[class*='grid'],\n[class*='col-'],\n[class*='mobile-'],\n.grid:after {\n\tbox-sizing: border-box;\t\n}\n\n[class*='col-'] {\n\tfloat: left;\n  \tmin-height: 1px;\n\tpadding-right: 20px; /* column-space */\n}\n\n[class*='col-'] [class*='col-']:last-child {\n\tpadding-right: 0;\n}\n\n.grid {\n\twidth: 100%;\n\tmax-width: 1140px;\n\tmin-width: 748px; /* when using padded grid on ipad in portrait mode, width should be viewport-width - padding = (768 - 20) = 748. actually, it should be even smaller to allow for padding of grid containing element */\n\tmargin: 0 auto;\n\toverflow: hidden;\n}\n\n.grid:after {\n\tcontent: \"\";\n\tdisplay: table;\n\tclear: both;\n}\n\n.grid-pad {\n\tpadding-top: 20px;\n\tpadding-left: 20px; /* grid-space to left */\n\tpadding-right: 0; /* grid-space to right: (grid-space-left - column-space) e.g. 20px-20px=0 */\n}\n\n.push-right {\n\tfloat: right;\n}\n\n/* Content Columns */\n\n.col-1-1 {\n\twidth: 100%;\n}\n.col-2-3, .col-8-12 {\n\twidth: 66.66%;\n}\n\n.col-1-2, .col-6-12 {\n\twidth: 50%;\n}\n\n.col-1-3, .col-4-12 {\n\twidth: 33.33%;\n}\n\n.col-1-4, .col-3-12 {\n\twidth: 25%;\n}\n\n.col-1-5 {\n\twidth: 20%;\n}\n\n.col-1-6, .col-2-12 {\n\twidth: 16.667%;\n}\n\n.col-1-7 {\n\twidth: 14.28%;\n}\n\n.col-1-8 {\n\twidth: 12.5%;\n}\n\n.col-1-9 {\n\twidth: 11.1%;\n}\n\n.col-1-10 {\n\twidth: 10%;\n}\n\n.col-1-11 {\n\twidth: 9.09%;\n}\n\n.col-1-12 {\n\twidth: 8.33%\n}\n\n/* Layout Columns */\n\n.col-11-12 {\n\twidth: 91.66%\n}\n\n.col-10-12 {\n\twidth: 83.333%;\n}\n\n.col-9-12 {\n\twidth: 75%;\n}\n\n.col-5-12 {\n\twidth: 41.66%;\n}\n\n.col-7-12 {\n\twidth: 58.33%\n}\n\n/* Pushing blocks */\n\n.push-2-3, .push-8-12 {\n\tmargin-left: 66.66%;\n}\n\n.push-1-2, .push-6-12 {\n\tmargin-left: 50%;\n}\n\n.push-1-3, .push-4-12 {\n\tmargin-left: 33.33%;\n}\n\n.push-1-4, .push-3-12 {\n\tmargin-left: 25%;\n}\n\n.push-1-5 {\n\tmargin-left: 20%;\n}\n\n.push-1-6, .push-2-12 {\n\tmargin-left: 16.667%;\n}\n\n.push-1-7 {\n\tmargin-left: 14.28%;\n}\n\n.push-1-8 {\n\tmargin-left: 12.5%;\n}\n\n.push-1-9 {\n\tmargin-left: 11.1%;\n}\n\n.push-1-10 {\n\tmargin-left: 10%;\n}\n\n.push-1-11 {\n\tmargin-left: 9.09%;\n}\n\n.push-1-12 {\n\tmargin-left: 8.33%\n}\n\n@media handheld, only screen and (max-width: 767px) {\n\t.grid {\n\t\twidth: 100%;\n\t\tmin-width: 0;\n\t\tmargin-left: 0;\n\t\tmargin-right: 0;\n\t\tpadding-left: 20px; /* grid-space to left */\n\t\tpadding-right: 10px; /* grid-space to right: (grid-space-left - column-space) e.g. 20px-10px=10px */\n\t}\n\n\t[class*='col-'] {\n\t\twidth: auto;\n\t\tfloat: none;\n\t\tmargin: 10px 0;\n\t\tpadding-left: 0;\n\t\tpadding-right: 10px; /* column-space */\n\t}\n\n\t[class*='col-'] [class*='col-'] {\n\t\tpadding-right: 0;\n\t}\n\n\t/* Mobile Layout */\n\n\t[class*='mobile-col-'] {\n\t\tfloat: left;\n\t\tmargin: 0 0 10px;\n\t\tpadding-left: 0;\n\t\tpadding-right: 10px; /* column-space */\n\t\tpadding-bottom: 0;\n\t}\n\n\t.mobile-col-1-1 {\n\t\twidth: 100%;\n\t}\n\t.mobile-col-2-3, .mobile-col-8-12 {\n\t\twidth: 66.66%;\n\t}\n\n\t.mobile-col-1-2, .mobile-col-6-12 {\n\t\twidth: 50%;\n\t}\n\n\t.mobile-col-1-3, .mobile-col-4-12 {\n\t\twidth: 33.33%;\n\t}\n\n\t.mobile-col-1-4, .mobile-col-3-12 {\n\t\twidth: 25%;\n\t}\n\n\t.mobile-col-1-5 {\n\t\twidth: 20%;\n\t}\n\n\t.mobile-col-1-6, .mobile-col-2-12 {\n\t\twidth: 16.667%;\n\t}\n\n\t.mobile-col-1-7 {\n\t\twidth: 14.28%;\n\t}\n\n\t.mobile-col-1-8 {\n\t\twidth: 12.5%;\n\t}\n\n\t.mobile-col-1-9 {\n\t\twidth: 11.1%;\n\t}\n\n\t.mobile-col-1-10 {\n\t\twidth: 10%;\n\t}\n\n\t.mobile-col-1-11 {\n\t\twidth: 9.09%;\n\t}\n\n\t.mobile-col-1-12 {\n\t\twidth: 8.33%\n\t}\n\n\t/* Layout Columns */\n\n\t.mobile-col-11-12 {\n\t\twidth: 91.66%\n\t}\n\n\t.mobile-col-10-12 {\n\t\twidth: 83.333%;\n\t}\n\n\t.mobile-col-9-12 {\n\t\twidth: 75%;\n\t}\n\n\t.mobile-col-5-12 {\n\t\twidth: 41.66%;\n\t}\n\n\t.mobile-col-7-12 {\n\t\twidth: 58.33%\n\t}\n\n\t.hide-on-mobile {\n\t\tdisplay: none !important;\n\t\twidth: 0;\n\t\theight: 0;\n\t}\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host, :host div {\n  height: 100%;\n  display: block;\n}\n\n:host /deep/ #circle circle {\n  fill: none;\n  pointer-events: all;\n}\n\n:host /deep/ .group path {\n  fill-opacity: .5;\n}\n\n:host /deep/ path.chord {\n  stroke: #000;\n  stroke-width: .25 px;\n}\n\n:host /deep/ #circle:hover path.fade {\n  display: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host, :host div {\n  height: 100%;\n  display: block;\n}\n\n:host /deep/ ul {\n  margin: 0;\n  list-style-type: none;\n  padding-left:10px;\n}\n\n:host /deep/ i {\n  font-size: 14px;\n  margin-right: 5px;\n  line-height: 22px;\n  vertical-align: middle;\n}\n\n:host /deep/ .closed > ul {\n  display: none;\n}\n\n:host /deep/ .open > ul {\n  display: block;\n}\n\n:host /deep/ .closed, :host /deep/ .open {\n  font-weight: bold;\n}\n\n:host /deep/ .closed, :host /deep/ .open, :host /deep/ .empty {\n  white-space: nowrap;\n}\n\n:host /deep/ .empty {\n  font-weight: normal;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  display: block;\n  position: relative;\n}\n\n.controls {\n  position: absolute !important;\n  top: 5px;\n  left: 5px;\n  z-index: 10;\n  background: white;\n  padding: 3px;\n}\n\n.content {\n  height: 100%;\n}\n\n:host /deep/ .links line {\n  stroke: #999;\n  stroke-opacity: 0.6;\n}\n\n:host /deep/ .nodes circle {\n  stroke-width: 0px;\n}\n\n:host /deep/ .nodes .selected {\n  stroke-width: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host /deep/ .selected { color: blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host, :host div {\n  height: 100%;\n  position: relative;\n}\n\n:host /deep/ {\n  display: block;\n}\n:host /deep/ .foreground path {\n  fill: none;\n  stroke-opacity: .5;\n  stroke-width: 1.5px;\n  stroke: #111;\n}\n\n:host /deep/ .foreground path.selected {\n  stroke-opacity: 1;\n}\n\n:host /deep/ .brush .extent {\n  fill-opacity: .3;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n:host /deep/ .axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n:host /deep/ .axis text {\n  text-shadow: 0 1px 0 #fff;\n  cursor: move;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host, :host div {\n  display: block;\n  height: 100%;\n}\n\n:host {  position: relative; }\n\n.controls {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n\n:host /deep/ path.arc {\n  cursor: move;\n  fill: #fff;\n}\n\n:host /deep/ .node {\n  font-size: 10px;\n}\n\n:host /deep/ .node:hover {\n  fill: #1f77b4;\n}\n\n:host /deep/ .link {\n  fill: none;\n  stroke: #1f77b4;\n  stroke-opacity: .4;\n  pointer-events: none;\n}\n\n:host /deep/ .link.source, :host /deep/ .link.target {\n  stroke-opacity: 1;\n  stroke-width: 2px;\n}\n\n:host /deep/ .selected {\n  font-weight: bold;\n}\n\n:host /deep/ .node.target {\n  fill: #d62728 !important;\n}\n\n:host /deep/ .link.source {\n  stroke: #d62728;\n}\n\n:host /deep/ .node.source {\n  fill: #2ca02c;\n}\n\n:host /deep/ .link.target {\n  stroke: #2ca02c;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  display:block;\n  height: 100%;\n  position: relative;\n}\n\n.y-controls {\n  position: absolute;\n  top: 10px;\n  left: 50px;\n  z-index: 10;\n}\n\n.x-controls {\n  position: absolute;\n  bottom: 35px;\n  right: 20px;\n  text-align: right;\n  z-index: 10;\n}\n\n.content { height:100%; }\n:host /deep/ .selected { fill: blue; }\n:host /deep/ .extent { fill-opacity: 0.2; }\n:host /deep/ .axis path, :host /deep/ .axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  display: block;\n  position: relative;\n  font-size: 10px;\n}\n\n.controls {\n  position: absolute !important;\n  top: 5px;\n  right: 5px;\n  z-index: 10;\n  background: white;\n  padding: 3px;\n}\n\n.content {\n  height: 100%;\n}\n\n:host /deep/ .selected rect { fill: blue !important; }\n:host /deep/ .selected text { fill: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.container {\n  width: 100%;\n  overflow: hidden;\n}\n\n.container .nav {\n  width: 200px;\n  float: left;\n}\n\n.container .content {\n  margin-left: 220px;\n}\n\n.nav a {\n  color: black;\n  font-weight: bold;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.comparison, .selector {\n  width: 100%; overflow: hidden;\n  display: block;\n}\n\n.comparison .chart {\n  float: left;\n  width: 50%;\n  height: 200px;\n}\n\n.selector .chart {\n  width: 50%;\n  height: 200px;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.example {\n  width: 100%; overflow: hidden;\n  display: block;\n}\n\n.example .chart {\n  width: 50%;\n  height: 200px;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.example {\n  width: 100%; overflow: hidden;\n  display: block;\n}\n\n.example .chart {\n  float: left;\n  width: 50%;\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.example {\n  width: 100%; overflow: hidden;\n  display: block;\n}\n\n.example .chart {\n  float: left;\n  width: 33%;\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "\n.example {\n  width: 100%; overflow: hidden;\n  display: block;\n}\n\n.example .chart {\n  float: left;\n  width: 50%;\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.nav {\n  display: inline;\n  width: 250px;\n  float: left;\n}\n\n.nav a {\n  color: black;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n:host /deep/ .mat-list-text {\n  padding: 0 16px !important;\n}\n\n.content {\n  margin-left: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  max-width: 650px;\n  margin: auto;\n}\n\n.description {\n  color: #555;\n}\n\n.body {\n  margin-top: 30px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".t-json-viewer {\n  font-family: monospace;\n  font-size: 1em;\n  overflow: hidden;\n  display: inline-block;\n}\n\n/* Item */\n\n.item {\n  border: 1px solid #fff;\n  padding: 1px;\n  margin: 1px 1px 1px 2px;\n}\n\n.inner-item {\n  margin-left: 6px;\n  -webkit-transition: -webkit-transform 0.1s ease-in;\n  transition: -webkit-transform 0.1s ease-in;\n  transition: transform 0.1s ease-in;\n  transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in;\n}\n\n/* Main */\n\n.item__title {\n  white-space: nowrap;\n}\n\n.item__key {\n  color: #4E187C;\n}\n\n.item__dot {\n  color: #999;\n}\n\n.item__value {\n  color: #000;\n}\n\n/* Colors */\n\n.item__type--array .item__value {\n  color: #999;\n}\n\n.item__type--object .item__value {\n  color: #999;\n}\n\n.item__type--string .item__value {\n  color: #FF6B6B;\n}\n\n.item__type--number .item__value {\n  color: #009688;\n}\n\n.item__type--boolean .item__value {\n  color: #494949;\n  background: #FFE66D;\n}\n\n.item__type--date .item__value {\n  color: #05668D;\n}\n\n.item__type--function .item__value {\n  color: #999;\n}\n\n.item__type--null .item__value {\n  color: #fff;\n  background: red;\n}\n\n.item__type--undefined .item__key {\n  color: #999;\n}\n.item__type--undefined .item__value {\n  color: #fff;\n  background: #999;\n}\n\n/* */\n\n.toggler,.no-toggler {\n  font-size: .8em;\n  line-height: 1.2em;\n  vertical-align: middle;\n}\n\n.toggler {\n  opacity: .6;\n}\n\n.no-toggler {\n  opacity: .0;\n}\n\n.toggler::after, .no-toggler::after {\n  display: inline-block;\n  -webkit-transition: -webkit-transform 0.1s ease-in;\n  transition: -webkit-transform 0.1s ease-in;\n  transition: transform 0.1s ease-in;\n  transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in;\n  content: \"\\25BA\";\n}\n\n.is-opened-true > .item__title > .toggler::after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n/* */\n\n.is-object-true > .toggler,\n.is-object-true > .item__title{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n}\n\n.header {\n  background: lightblue;\n  padding: 10px;\n  position: relative;\n  display: block;\n  height: 22px;\n}\n\n.header .title {\n  min-width: 100px;\n  float: left;\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: bold;\n  height: 42px;\n}\n\n.header .controls {\n  float: right;\n}\n\n.content {\n  height: calc( 100% - 52px );\n  padding: 5px;\n}\n\n.chartWithScroll {\n  width: 100%;\n  height:100%;\n  overflow: auto;\n}\n\nd3ng-groups {\n  width: 100%;\n  height: 100%;\n}\n\n.chartWithoutScroll {\n  width: 100%;\n  height:100%;\n  overflow: hidden;\n}\n\nmd-icon:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  white-space: nowrap;\n  border-style: none none solid none;\n  border-color: lightgrey;\n  border-width: 1px;\n  margin-right: 5px;\n}\n\n.editor {\n  width: 400px;\n  display: inline-block;\n  white-space: normal;\n}\n\n.label {\n  font-size: 12px;\n  font-weight: normal;\n  color: grey;\n}\n\n.json-view .content {\n  height: 200px;\n  margin: 5px;\n  overflow: auto;\n}\n\n.transformation md-input-container {\n  width: 100%;\n}\n\n.visualization md-select, .visualization form {\n  margin-top: 15px;\n}\n\n.visualization, .transformation {\n  padding-bottom: 15px;\n}\n\n.visualization form md-select, .visualization form md-input-container {\n  width: 100%;\n}\n\n.visualization form md-select {\n  margin-bottom: 15px;\n}\n\n.canvas {\n  vertical-align: top;\n  display: inline-block;\n  white-space: normal;\n}\n\n.controls {\n  padding-top: 30px;\n}\n\n.editor {\n  padding-right: 5px;\n  border-style: none solid none none;\n  border-color: lightgrey;\n  border-width: 1px;\n  margin-right: 5px;\n}\n\n.edit-part:not(:last-child) {\n  border-style: none none solid none;\n  border-color: lightgrey;\n  border-width: 1px;\n  margin-right: 5px;\n}\n\nmd-icon:hover {\n  cursor: pointer;\n}\n\n.editor .source {\n  position: relative;\n}\n\n.editor .source d3ng-group-selection {\n  position: absolute;\n  right: 0px;\n  top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\n  <div class=\"col-4-12\">\n    <h1>Select a packages based on their dependencies</h1>\n    <d3ng-groups [context]=\"context\" style=\"height: 380px; width: 380px;\"\n                 [groups]=\"[3]\" (selectedChanged)=\"onPackagesChanged($event.selected)\">\n      <d3ng-chord-diagram d3ngSource\n                          [source]=\"data\" pattern=\"package[type]\">\n      </d3ng-chord-diagram>\n    </d3ng-groups>\n  </div>\n  <div class=\"col-8-12\">\n    <h1>Inspect package size/complexities via tree map</h1>\n    <d3ng-groups [context]=\"context\" [groups]=\"[3]\" style=\"height: 380px; width: 760px;\">\n      <d3ng-tree-map d3ngSource [source]=\"data\" pattern=\"package+/type\"\n                     value=\"WMC-1\" [dimensions]=\"typeMetrics\">\n      </d3ng-tree-map>\n    </d3ng-groups>\n  </div>\n</div>\n\n<div class=\"grid\">\n  <div class=\"col-8-12\">\n    <h1>Filter based on class metrics</h1>\n    <d3ng-groups [context]=\"context\" [groups]=\"[1]\" (selectedChanged)=\"onClassesChanged($event)\">\n      <d3ng-parallel-coordinates style=\"height: 380px; width: 760px\" d3ngSource\n                                 [source]=\"packages\" pattern=\"package/type+\"\n                                 [dimensions]='typeMetrics'></d3ng-parallel-coordinates>\n    </d3ng-groups>\n  </div>\n  <div class=\"col-4-12\">\n    <h1>Inspect dependencies of filtered classes</h1>\n    <d3ng-groups [context]=\"context\" [groups]=\"[1]\">\n      <d3ng-radial-edge-bundling style=\"height: 380px; width: 380px\" [config]=\"{textWidth: 30, shortenLength: 10}\"\n                                 d3ngSource\n                                 [source]=\"data\" pattern=\"package/type\">\n      </d3ng-radial-edge-bundling>\n    </d3ng-groups>\n  </div>\n</div>\n\n<div class=\"grid\">\n  <div class=\"col-6-12\">\n    <h1>Analyse relationships between metrics of filtered classes.</h1>\n  </div>\n  <div class=\"col-6-12\">\n    &nbsp;\n  </div>\n</div>\n\n<div class=\"grid\">\n  <div class=\"col-4-12\">\n    <d3ng-groups [context]=\"context\" [groups]=\"[0,2]\" style=\"width: 380px; height: 380px;\">\n      <d3ng-scatter-plot [data]=\"classes\" x=\"WMC-CC\" y=\"RFC\"\n                         [dimensions]='typeMetrics' [config]=\"{ticks: [8, 5]}\">\n      </d3ng-scatter-plot>\n    </d3ng-groups>\n  </div>\n  <div class=\"col-4-12\">\n    <d3ng-groups [context]=\"context\" [groups]=\"[0,2]\" style=\"width: 380px; height: 380px;\">\n      <d3ng-scatter-plot [data]=\"classes\" x=\"WMC-CC\" y=\"LCOM\"\n                         [dimensions]='typeMetrics' [config]=\"{ticks: [8, 5]}\">\n      </d3ng-scatter-plot>\n    </d3ng-groups>\n  </div>\n  <div class=\"col-4-12\">\n    <d3ng-groups [context]=\"context\" [groups]=\"[0,2]\" style=\"width: 380px; height: 380px;\">\n      <d3ng-scatter-plot [data]=\"classes\" x=\"RFC\" y=\"CBO\"\n                         [dimensions]='typeMetrics'>\n      </d3ng-scatter-plot>\n    </d3ng-groups>\n  </div>\n</div>\n<!--\n<div class=\"body\">\n  <div class=\"explorer\">\n    <!--<d3ng-groups [context]=\"context\" [groups]=\"[0]\" (selectedChanged)=\"onPackagesChanged($event.selected)\">\n      <d3ng-collapsible-indented-tree d3ngSource [source]=\"data\" pattern=\".\"></d3ng-collapsible-indented-tree>\n    </d3ng-groups>\n\n  </div>\n  <div class=\"content\">\n    <div class=\"group\">\n      <d3ng-groups [context]=\"context\" [groups]=\"[0]\" (selectedChanged)=\"onPackagesChanged($event.selected)\">\n        <d3ng-chord-diagram d3ngSource\n                            [source]=\"data\" pattern=\"package[type]\">\n        </d3ng-chord-diagram>\n      </d3ng-groups>\n      <d3ng-groups [context]=\"context\" [groups]=\"[0]\">\n        <d3ng-tree-map style=\"height: 300px\" d3ngSource [source]=\"data\" pattern=\"package+/type\"\n                       value=\"WMC-1\" [dimensions]=\"typeMetrics\">\n        </d3ng-tree-map>\n      </d3ng-groups>\n    </div>\n\n    <d3ng-groups [context]=\"context\" [groups]=\"[1]\" (selectedChanged)=\"onClassesChanged($event)\">\n      <d3ng-parallel-coordinates style=\"height: 300px\" d3ngSource\n                                 [source]=\"packages\" pattern=\"package/type+\"\n                                 [dimensions]='typeMetrics'></d3ng-parallel-coordinates>\n    </d3ng-groups>\n\n\n    <div class=\"scatterPlots\">\n      <d3ng-groups [context]=\"context\" [groups]=\"[2]\">\n        <d3ng-scatter-plot [data]=\"classes\" x=\"WMC-CC\" y=\"RFC\"\n                           [dimensions]='typeMetrics'>\n        </d3ng-scatter-plot>\n      </d3ng-groups>\n      <d3ng-groups [context]=\"context\" [groups]=\"[2]\">\n        <d3ng-scatter-plot [data]=\"classes\" x=\"WMC-CC\" y=\"LCOM\"\n                           [dimensions]='typeMetrics'>\n        </d3ng-scatter-plot>\n      </d3ng-groups>\n    </div>\n\n    <div class=\"dependencies\">\n      <d3ng-groups [context]=\"context\" [groups]=\"[2]\">\n        <d3ng-radial-edge-bundling style=\"width: 300px;\" [config]=\"{textWidth: 30, shortenLength: 10}\"\n                                   d3ngSource\n                                   [source]=\"data\" pattern=\"package/type\">\n        </d3ng-radial-edge-bundling>\n      </d3ng-groups>\n    </div>\n\n    <d3ng-groups [context]=\"context\">\n      <d3ng-force-graph style=\"width: 400px; height: 600px\" d3ngSource\n                        [source]=\"data\" pattern=\"package/type\"\n                        nodeValue=\"WMC-1\" [nodeDimensions]=\"typeMetrics\"></d3ng-force-graph>\n    </d3ng-groups>\n\n\n  </div>\n</div>-->\n\n"

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<div #chart></div>\n"

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "<d3ng-story title=\"Comparison\">\n  <story-description>\n    We can use the selections from two selection groups as input for different charts to compare data from two selections.\n  </story-description>\n\n  <story-body>\n    <div class=\"selector\">\n      <d3ng-groups class=\"chart\" [groups]=\"[0,1]\" (selectedChanged)=\"onSelectedChanged($event)\" [context]=\"context\">\n        <d3ng-scatter-plot d3ngSource [data]=\"data\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n    </div>\n    <div class=\"comparison\">\n      <d3ng-scatter-plot class=\"chart\" d3ngSource [source]=\"one\" pattern=\"container/contents\" [allowEmpty]=\"true\"\n                           [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      <d3ng-scatter-plot class=\"chart\" d3ngSource [source]=\"two\" pattern=\"container/contents\" [allowEmpty]=\"true\"\n                           [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n    </div>\n  </story-body>\n\n</d3ng-story>\n"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<d3ng-story title=\"Input from Selections\">\n  <story-description>\n    Often we want to use a chart or selection group to select the input data for other charts.\n  </story-description>\n\n  <story-body>\n    <div class=\"example\">\n      <d3ng-groups class=\"chart\" (selectedChanged)=\"selection=$event.selected\"\n                   [groups]=\"[0]\" [context]=\"context\">\n        <d3ng-scatter-plot d3ngSource [source]=\"data\"\n                           pattern=\"container\"\n                           [dimensions]=\"dimensions\" x=\"x\" y=\"y\"\n                           [config]=\"scatterPlotConfig\">\n        </d3ng-scatter-plot>\n      </d3ng-groups>\n\n      <d3ng-scatter-plot class=\"chart\" d3ngSource\n                         [source]=\"selection\"\n                         pattern=\"container/contents\" [allowEmpty]=\"true\"\n                         [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\">\n      </d3ng-scatter-plot>\n    </div>\n  </story-body>\n\n</d3ng-story>\n"

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<d3ng-story title=\"Mixed Hierarchy Levels\">\n  <story-description>\n    If data is hierarchical, charts might represent data on different hierarchy levels.\n    In this case, a data point (parent) in one chart can represent multiple data points (children) in another chart.\n  </story-description>\n\n  <story-body>\n    <div class=\"example\">\n      <d3ng-groups class=\"chart\" [context]=\"context\">\n        <d3ng-scatter-plot d3ngSource [source]=\"data\" pattern=\"container\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n\n      <d3ng-groups class=\"chart\" [context]=\"context\">\n        <d3ng-scatter-plot d3ngSource [source]=\"data\" pattern=\"container/contents\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n    </div>\n  </story-body>\n\n</d3ng-story>\n\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<d3ng-story title=\"Overlapping Selection Groups\">\n  <story-description>\n    Each selection group is associated with a color to distinguish selection groups and selections belonging to\n    different groups.\n  </story-description>\n\n  <story-body>\n    <div class=\"example\">\n      <d3ng-groups class=\"chart\" [groups]=\"[0]\" [context]=\"context\">\n        <d3ng-scatter-plot [data]=\"data\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n\n      <d3ng-groups class=\"chart\" [groups]=\"[1,0]\" [context]=\"context\">\n        <d3ng-scatter-plot [data]=\"data\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n\n      <d3ng-groups class=\"chart\" [groups]=\"[1]\" [context]=\"context\">\n        <d3ng-scatter-plot [data]=\"data\" [dimensions]=\"dimensions\" x=\"x\" y=\"y\" [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n    </div>\n  </story-body>\n\n</d3ng-story>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<d3ng-story title=\"Selection Group\">\n  <story-description>\n    Interactive selection in one chart is reflected in the selection of other charts.\n    Charts that interact via selections form <i>selection groups</i>.\n  </story-description>\n\n  <story-body>\n    <div class=\"example\">\n      <d3ng-groups class=\"chart\" [context]=\"context\">\n        <d3ng-scatter-plot [data]=\"data\"\n                           [dimensions]=\"dimensions\"\n                           x=\"x\" y=\"y\"\n                           [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n\n      <d3ng-groups class=\"chart\" [context]=\"context\">\n        <d3ng-scatter-plot [data]=\"data\"\n                           [dimensions]=\"dimensions\"\n                           x=\"x\" y=\"y\"\n                           [config]=\"scatterPlotConfig\"></d3ng-scatter-plot>\n      </d3ng-groups>\n    </div>\n  </story-body>\n\n</d3ng-story>\n\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"nav\">\n    <md-list>\n      <md-list-item *ngFor=\"let story of mstories; let i = index\">\n        <h2 md-list-icon=\"\">{{story.id}}</h2>\n        <h4 md-line><a [routerLink]=\"story.path\">{{story.title}}</a></h4>\n        <p md-line>{{story.subtitle}}</p>\n      </md-list-item>\n    </md-list>\n  </div>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<div class=\"description\" >\n  <ng-content select=\"story-description\"></ng-content>\n</div>\n\n<div class=\"body\">\n  <ng-content select=\"story-body\"></ng-content>\n</div>\n\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div class=\"t-json-viewer\">\n\n  <div\n    *ngFor=\"let item of asset;\"\n    [ngClass]=\"['item__type--' + item.type, 'is-object-' + isObject(item), 'is-opened-' + item.isOpened]\"\n    class=\"item\"\n  >\n\n    <div\n      class=\"item__title\"\n      (click)=\"clickHandle(item)\">\n      <span\n        [ngClass]=\"{true:'toggler', false:'no-toggler'}[isObject(item)]\">\n      </span>\n\n      <span class=\"item__key\">{{item.key}}</span><span class=\"item__dot\">:</span>\n\n      <span\n        class=\"item__value\"\n        *ngIf=\"!item.isOpened\"\n        [innerHTML]=\"item.title\"></span>\n    </div>\n\n    <div\n      class=\"inner-item\"\n      *ngIf=\"isObject(item) && item.isOpened\">\n      <t-json-viewer [json]=\"item.value\"></t-json-viewer>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"title\">{{title}}</div>\n  <div class=\"controls\">\n    <md-icon (click)=\"onRemoveClicked()\">remove_circle</md-icon>\n  </div>\n</div>\n<div class=\"content\">\n  <div [ngClass]=\"config.scroll ? 'chartWithScroll' : 'chartWithoutScroll'\">\n    <d3ng-groups [groups]=\"groups\" [context]=\"context\">\n      <d3ng-scatter-plot *ngIf=\"component=='d3ng-scatter-plot'\" #item\n                         d3ngSource [source]=\"source\" [pattern]=\"pattern\"\n                         [dimensions]=\"config.dimensions\"\n                         [x]=\"config.x\" [y]=\"config.y\"></d3ng-scatter-plot>\n      <d3ng-parallel-coordinates *ngIf=\"component=='d3ng-parallel-coordinates'\" #item\n                                 d3ngSource [source]=\"source\" [pattern]=\"pattern\"\n                                 [dimensions]=\"config.dimensions\"></d3ng-parallel-coordinates>\n\n      <d3ng-chord-diagram *ngIf=\"component=='d3ng-chord-diagram'\" #item\n                          d3ngSource [source]=\"source\" [pattern]=\"pattern\"></d3ng-chord-diagram>\n      <d3ng-radial-edge-bundling *ngIf=\"component=='d3ng-radial-edge-bundling'\" #item\n                                 d3ngSource [source]=\"source\" [pattern]=\"pattern\"></d3ng-radial-edge-bundling>\n      <d3ng-force-graph *ngIf=\"component=='d3ng-force-graph'\" #item\n                        d3ngSource [source]=\"source\" [pattern]=\"pattern\"\n                        [nodeValue]=\"config.nodeValue\" [nodeDimensions]=\"config.dimensions\"></d3ng-force-graph>\n\n      <d3ng-tree-map *ngIf=\"component=='d3ng-tree-map'\" #item\n                     d3ngSource [source]=\"source\" [pattern]=\"pattern\"\n                     [value]=\"config.value\" [dimensions]=\"config.dimensions\"></d3ng-tree-map>\n      <d3ng-collapsible-indented-tree *ngIf=\"component=='d3ng-collapsible-indented-tree'\" #item\n                                      d3ngSource [source]=\"source\" [pattern]=\"pattern\"></d3ng-collapsible-indented-tree>\n    </d3ng-groups>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\n  <div class=\"source json-view edit-part\">\n    <span class=\"label\">Source</span>\n    <d3ng-group-selection [multi]=\"false\" [allowEmpty]=\"true\" [groups]=\"availableGroups\" (valueChange)=\"onSourceGroupChanged($event)\"></d3ng-group-selection>\n    <div class=\"content\">\n      <t-json-viewer *ngIf=\"data\" [json]=\"source\"></t-json-viewer>\n    </div>\n  </div>\n  <div class=\"transformation edit-part\" d3ngSource [source]=\"source\" [pattern]=\"code\" (dataChange)=\"target=$event\" [allowEmpty]=\"true\">\n    <span class=\"label\">Transformation</span>\n    <form>\n      <md-input-container>\n        <textarea #codeInput mdInput></textarea>\n      </md-input-container>\n      <button type=\"button\" md-raised-button (click)=\"code=codeInput.value\"><md-icon>keyboard_return</md-icon></button>\n    </form>\n  </div>\n  <div class=\"target json-view edit-part\">\n    <span class=\"label\">Target</span>\n    <div class=\"content\">\n      <t-json-viewer [json]=\"target\"></t-json-viewer>\n    </div>\n  </div>\n  <div class=\"visualization edit-part\">\n    <span class=\"label\">Visualization</span>\n    <form class=\"chartForm\">\n      <md-select class=\"chartSelect\" placeholder=\"Chart to add\"\n                 [(ngModel)]=\"chartConfig\" [ngModelOptions]=\"{standalone: true}\">\n        <md-option *ngFor=\"let chart of chartsConfig.charts\" [value]=\"chart\">{{ chart.name }}</md-option>\n      </md-select>\n      <div *ngIf=\"chartConfig\">\n        <d3ng-group-selection #groupSelection [groups]=\"selectableGroups\" [multi]=\"true\" [allowEmpty]=\"false\"></d3ng-group-selection>\n        <div class=\"dim\" *ngFor=\"let property of (chartConfig ? chartConfig.dimensionProperties : [])\">\n          <md-select class=\"dimSelect\"\n                     [placeholder]=\"chartConfig.dimensionProperties.length > 1 ? property.name : 'metric'\"\n                     [(ngModel)]=\"property.value\" [ngModelOptions]=\"{standalone: true}\">\n            <md-option *ngFor=\"let dim of chartsConfig.dimensions\" [value]=\"dim\">{{dim}}</md-option>\n          </md-select>\n        </div>\n        <button type=\"button\" *ngIf=\"chartConfig\" md-raised-button (click)=\"addChart()\"><md-icon>add</md-icon></button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"canvas\">\n  <div [ngGrid]=\"gridConfig\">\n    <d3ng-workbench-item *ngFor=\"let item of items; let i = index\" [(ngGridItem)]=\"item.gridItemConfig\"\n                         class=\"item\" [title]=\"item.name\" [index]=\"i\" [source]=\"item.source\" [pattern]=\"item.pattern\"\n                         [component]=\"item.chartConfig.component\"\n                         [config]=\"item.chartConfig\" [groups]=\"item.groups\" [context]=\"context\">\n    </d3ng-workbench-item>\n  </div>\n</div>\n\n<!--\n<div class=\"column\" *ngFor=\"let source of sources; let i = index\">\n  <d3ng-workbench-column [source]=\"source\" [config]=\"config\" (selectionChange)=\"onSelectedChanged($event,i)\"\n                         [isLast]=\"i+1 == sources.length && i != 0\" #column></d3ng-workbench-column>\n</div>\n<div class=\"controls\">\n  <md-icon (click)=\"addClicked()\">add_circle</md-icon>\n</div>\n-->\n"

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_d3ng_groups_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngStoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let D3ngStoryComponent = class D3ngStoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], D3ngStoryComponent.prototype, "title", void 0);
D3ngStoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-story',
        template: __webpack_require__(302),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [])
], D3ngStoryComponent);

class D3ngStoryBase {
    constructor() {
        this.context = new __WEBPACK_IMPORTED_MODULE_1__components_d3ng_groups_component__["a" /* D3ngGroupContext */];
        this.data = this.createDummyData('container', 1.5, 1.5, 0.5, (x, y) => this.createDummyData('contents', x, y, 0.15));
        this.scatterPlotConfig = {
            extent: [[0.5, 2.5], [0.5, 2.5]],
            ticks: [5, 5]
        };
        this.dimensions = ['x', 'y'];
    }
    createDummyData(t, x, y, size, childrenFunction) {
        return [
            { x: -1, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 1 },
            { x: 1, y: 1 },
        ].map(o => {
            const result = {
                type: t,
                x: (o.x * size + x),
                y: (o.y * size + y),
            };
            if (childrenFunction) {
                result['children'] = childrenFunction(result.x, result.y);
            }
            return result;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = D3ngStoryBase;

//# sourceMappingURL=d3ng-story.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return D3ngGroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class D3ngGroupContext {
    constructor() {
        this.groups = [new D3ngGroup(), new D3ngGroup(), new D3ngGroup(), new D3ngGroup()];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = D3ngGroupContext;

let D3ngGroupsComponent = class D3ngGroupsComponent {
    constructor() {
        this.context = null;
        this.groups = [0];
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.isHold = false;
        this.groupEventHandlers = [];
    }
    ngAfterContentInit() {
        if (!this.context) {
            throw new Error("No group context set.");
        }
        this.chart.selectedChange.subscribe(selected => this.onDirectSelectedChanged(selected));
        this.chart.currentSelectionGroup = this.groups[0];
        this.groups.forEach(group => {
            const handler = selected => {
                this.onIndirectSelectedChanged(group, selected);
            };
            this.groupEventHandlers.push(handler);
            this.context.groups[group].subscribe(handler);
        });
    }
    onIndirectSelectedChanged(group, selected) {
        this.chart.onIndirectSelectionChanged(selected, group);
        this.selectedChanged.emit({ group: group, selected: selected });
    }
    onDirectSelectedChanged(selected) {
        this.context.groups[this.chart.currentSelectionGroup].onDirectSelectedChanged(this.chart, selected);
    }
    ngOnDestroy() {
        this.groups.forEach(group => {
            this.context.groups[group].cancelSubscription(this.groupEventHandlers[group]);
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__d3ng_chart__["a" /* D3ngChart */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__["a" /* D3ngChart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__["a" /* D3ngChart */]) === "function" && _a || Object)
], D3ngGroupsComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", D3ngGroupContext)
], D3ngGroupsComponent.prototype, "context", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], D3ngGroupsComponent.prototype, "groups", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], D3ngGroupsComponent.prototype, "selectedChanged", void 0);
D3ngGroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-groups',
        template: `
    <div class="container">
      <div class="controls">
        <div class="group-controls">
          <d3ng-group-selection [(value)]="chart.currentSelectionGroup" [groups]="groups"></d3ng-group-selection>
        </div>
        <div class="selection-controls">
          <!--<md-slide-toggle color="warn" [(checked)]="isHold"></md-slide-toggle>-->
        </div>
      </div>
      <div class="content">
        <ng-content></ng-content>  
      </div>
    </div>  
  `,
        styles: [
            ':host { display: block; }',
            '.container, .content { height: 100%; }',
            '.controls { position: relative; }',
            '.selection-controls { position: absolute; left: 0px; z-index: 1000; }',
            '.group-controls { position: absolute; right: 10px; z-index: 1000;}',
            'md-button-toggle-group { height: 15px; }',
            '.mat-button-toggle-checked { border: solid grey 1px; }',
            '.group-btn-0.mat-button-toggle-checked { background-color: #9E2622; }',
            '.group-btn-0:not(.mat-button-toggle-checked) {background-color: #CC8574; }',
            '.group-btn-1.mat-button-toggle-checked { background-color: #005A9C; }',
            '.group-btn-1:not(.mat-button-toggle-checked) {background-color: #B3C1DF; }',
            '.group-btn-2.mat-button-toggle-checked { background-color: #D4C48E; }',
            '.group-btn-2:not(.mat-button-toggle-checked) {background-color: #E8DEC0; }',
            '.group-btn-3.mat-button-toggle-checked { background-color: #76A58E; }',
            '.group-btn-3:not(.mat-button-toggle-checked) {background-color: #006C45; }',
        ]
    }),
    __metadata("design:paramtypes", [])
], D3ngGroupsComponent);

class D3ngGroup {
    constructor() {
        this.selections = new Map();
        this.handler = [];
    }
    onDirectSelectedChanged(chart, selected) {
        if (!selected) {
            throw new Error("Selected must be defined.");
        }
        this.selections.set(chart, selected);
        const indirectSelected = this.getSelected();
        this.handler.forEach(handler => handler(indirectSelected));
    }
    getSelected() {
        const selected = [];
        for (const selection of this.selections.values()) {
            selection.forEach(s => {
                if (selected.indexOf(s) != 1) {
                    selected.push(s);
                }
            });
        }
        return selected;
    }
    subscribe(handler) {
        this.handler.push(handler);
    }
    cancelSubscription(handler) {
        const index = this.handler.indexOf(handler);
        if (index != -1) {
            this.handler.splice(index, 1);
        }
    }
}
var _a;
//# sourceMappingURL=d3ng-groups.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_list_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_parallel_coordinates_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3ng_scatter_plot_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3ng_tree_map_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3ng_radial_edge_bundling_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3ng_chord_diagram_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3ng_force_graph_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3ng_collapsible_indented_tree_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__d3ng_source_directive__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__d3ng_histogram_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__d3ng_groups_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__d3ng_groups_selection_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let D3ngComponentsModule = class D3ngComponentsModule {
};
D3ngComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__d3ng_list_component__["a" /* D3ngListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__d3ng_parallel_coordinates_component__["a" /* D3ngParallelCoordinatesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__d3ng_scatter_plot_component__["a" /* D3ngScatterPlotComponent */],
            __WEBPACK_IMPORTED_MODULE_4__d3ng_tree_map_component__["a" /* D3ngTreeMapComponent */],
            __WEBPACK_IMPORTED_MODULE_5__d3ng_radial_edge_bundling_component__["a" /* D3ngRadialEdgeBundlingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__d3ng_chord_diagram_component__["a" /* D3ngChordDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_7__d3ng_force_graph_component__["a" /* D3ngForceGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_8__d3ng_collapsible_indented_tree_component__["a" /* D3ngCollapsibleIndentedTreeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__d3ng_source_directive__["a" /* D3ngSourceDirective */],
            __WEBPACK_IMPORTED_MODULE_16__d3ng_histogram_component__["a" /* D3ngHistogramComponent */],
            __WEBPACK_IMPORTED_MODULE_17__d3ng_groups_component__["b" /* D3ngGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__d3ng_groups_selection_component__["a" /* D3ngGroupSelectionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__d3ng_list_component__["a" /* D3ngListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__d3ng_parallel_coordinates_component__["a" /* D3ngParallelCoordinatesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__d3ng_scatter_plot_component__["a" /* D3ngScatterPlotComponent */],
            __WEBPACK_IMPORTED_MODULE_4__d3ng_tree_map_component__["a" /* D3ngTreeMapComponent */],
            __WEBPACK_IMPORTED_MODULE_5__d3ng_radial_edge_bundling_component__["a" /* D3ngRadialEdgeBundlingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__d3ng_chord_diagram_component__["a" /* D3ngChordDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_7__d3ng_force_graph_component__["a" /* D3ngForceGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_8__d3ng_collapsible_indented_tree_component__["a" /* D3ngCollapsibleIndentedTreeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__d3ng_source_directive__["a" /* D3ngSourceDirective */],
            __WEBPACK_IMPORTED_MODULE_16__d3ng_histogram_component__["a" /* D3ngHistogramComponent */],
            __WEBPACK_IMPORTED_MODULE_17__d3ng_groups_component__["b" /* D3ngGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__d3ng_groups_selection_component__["a" /* D3ngGroupSelectionComponent */]
        ]
    })
], D3ngComponentsModule);

//# sourceMappingURL=d3ng-components.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(178);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__d3ng_pattern_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



class D3ngDependencyChart extends __WEBPACK_IMPORTED_MODULE_2__d3ng_chart__["a" /* D3ngChart */] {
    constructor() {
        super(...arguments);
        /**
         * The data object key that gives the numerical value.
         */
        this.valueKey = "value";
        /**
         * The data node key that gives an array of dependency objects.
         * Each dependency object has an id and a value (see `idKey` and
         * `valueKey`).
         */
        this.refKey = "dependencies";
        /**
         * The key used to identify or reference data objects.
         */
        this.idKey = "id";
    }
    getValue(ref) {
        return ref[this.valueKey];
    }
    /**
     * Return the id of a given data node or dependency.
     */
    getId(node) {
        return node[this.idKey];
    }
    getDependencies(node) {
        return node[this.refKey];
    }
    computeIndexGraphFromData() {
        return this.computeGraphFromData((index, obj) => index);
    }
    computeObjectGraphFromData() {
        return this.computeGraphFromData((index, obj) => obj);
    }
    computeGraphFromData(ref) {
        const self = this;
        const graph = {};
        graph.nodes = [];
        graph.links = [];
        const groupIds = {};
        let groupIdGenerator = 0;
        const indexes = {};
        this.data.forEach(d => {
            const id = self.getId(d);
            const parent = self.getParent(d);
            const group = parent ? self.getId(parent) : null;
            if (!groupIds[group]) {
                groupIds[group] = groupIdGenerator++;
            }
            indexes[id] = graph.nodes.length;
            graph.nodes.push({ "id": id, "data": d, "group": groupIds[group] });
        });
        this.data.forEach(d => {
            const dependencies = self.getDependencies(d);
            if (dependencies) {
                dependencies.forEach(dep => {
                    const targetIndex = indexes[self.getId(dep)];
                    if (targetIndex) {
                        graph.links.push({
                            "source": ref(indexes[self.getId(d)], d),
                            "target": ref(targetIndex, graph.nodes[targetIndex].data),
                            "value": self.getValue(dep)
                        });
                    }
                });
            }
        });
        return graph;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = D3ngDependencyChart;

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngDependencyChart.prototype, "valueKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngDependencyChart.prototype, "refKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], D3ngDependencyChart.prototype, "idKey", void 0);
//# sourceMappingURL=d3ng-dependency-chart.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3ng_pattern_parser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3ng_pattern_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__d3ng_pattern_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__ = __webpack_require__(15);


class D3ngHierarchicalChart extends __WEBPACK_IMPORTED_MODULE_1__d3ng_chart__["a" /* D3ngChart */] {
    /**
     * @param node to compute the value for
     * @returns {number} the value associated with the given node. Default is 1.
     */
    getValue(node) {
        return 1;
    }
    static computeHierarchyRoot(self, data) {
        if (!data || data.length == 0) {
            return undefined;
        }
        const knownRoots = {};
        let root = null;
        const rootOf = dataPoint => {
            if (!knownRoots[dataPoint]) {
                var parent = self.getParent(dataPoint);
                if (parent) {
                    knownRoots[dataPoint] = rootOf(parent);
                }
                else {
                    if (root == null) {
                        root = dataPoint;
                        knownRoots[dataPoint] = root;
                    }
                    else {
                        throw new Error("Hierarchy data has more than one root.");
                    }
                }
            }
            return knownRoots[dataPoint];
        };
        data.forEach(dataPoint => rootOf(dataPoint));
        return root;
    }
    computeHierarchyRoot() {
        return D3ngHierarchicalChart.computeHierarchyRoot(this, this.data);
    }
    static createUniDirectionalHierarchyView(self, node) {
        return D3ngHierarchicalChart.createHierarchyView(self, node, null, null);
    }
    /**
     * Creates a tree structure that mirrors the given tree structure. This "view" is to be used in cases where D3 is manipulating
     * the data it visualizes. Instead of changing the original data, it is ought to be preserved. This allows multiple
     * components to use the same data without interfering with each other.
     * @param self The chart component (used to access children of nodes).
     * @param node The node to be mirrored.
     * @param mapping The backward mapping that returns the mirror node for a given node.
     * @parem id Function that gives a unique id for a node.
     * @returns The mirror/view node. It contains a reference to the original node using the key 'original'.
     */
    static createHierarchyView(self, node, mapping, id) {
        const result = {};
        result.original = node;
        result.children = [];
        if (mapping && id) {
            const nodeId = id(node);
            result.key = nodeId;
            mapping[nodeId] = result;
        }
        self.getChildren(node).forEach(child => {
            const viewChild = D3ngHierarchicalChart.createHierarchyView(self, child, mapping, id);
            result.children.push(viewChild);
            viewChild.parent = result;
        });
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = D3ngHierarchicalChart;

//# sourceMappingURL=d3ng-hierarchical-chart.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_selection_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_d3ng_groups_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ngWorkbenchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let D3ngWorkbenchComponent = class D3ngWorkbenchComponent {
    constructor(http) {
        this.gridConfig = {
            resizeable: true,
            margins: [5, 5],
            col_width: 170,
            row_height: 170,
        };
        this.chartsConfig = {
            dimensions: ["WMC-1", "WMC-CC", "WMC-HV", "DIT", "NOC", "CBO", "RFC", "LCOM"],
            charts: [
                {
                    type: "d3ng-scatter-plot",
                    name: "Scatter plot",
                    pattern: "package/type+",
                    dimensionProperties: [{
                            name: 'x', value: 'WMC-1'
                        }, {
                            name: 'y', value: 'RFC'
                        }]
                },
                {
                    type: "d3ng-parallel-coordinates",
                    name: "Parallel coordinates",
                    pattern: "package/type",
                    dimensionProperties: []
                },
                {
                    type: "d3ng-chord-diagram",
                    name: "Chord diagram",
                    pattern: "package[type]",
                    dimensionProperties: []
                },
                {
                    type: "d3ng-radial-edge-bundling",
                    name: "Radial edge bundling",
                    pattern: "package/type",
                    dimensionProperties: []
                },
                {
                    type: "d3ng-force-graph",
                    name: "Force graph",
                    pattern: "package/type",
                    dimensionProperties: [{
                            name: 'nodeValue',
                            value: 'WMC-1'
                        }]
                },
                {
                    type: "d3ng-tree-map",
                    name: "Tree map",
                    pattern: "package+/type",
                    dimensionProperties: [{
                            name: 'value',
                            value: 'WMC-1'
                        }]
                },
                {
                    type: "d3ng-collapsible-indented-tree",
                    name: "Collapsible tree",
                    pattern: ".",
                    dimensionProperties: [],
                    scroll: true
                }
            ]
        };
        this.data = null; // the global remote data
        this.source = []; // the current source shown as JSON
        this.sourceGroup = -1; // the group used for the current source, -1 for the remote/global data as source
        this.code = ""; // the current value of the pattern
        this.items = []; // the items on the workbench
        this.availableGroups = []; // the groups shown as a source
        this.groups = [0, 1, 2, 3]; // the groups that exist at all
        this.groupChildren = [[], [], [], []]; // the items with data based on a groups selection
        this.groupMember = [[], [], [], []]; // the items that belong to a group
        this.selectableGroups = [0, 1, 2, 3]; // the groups available to add an item to based on the currently selected source
        this.context = new __WEBPACK_IMPORTED_MODULE_4__components_d3ng_groups_component__["a" /* D3ngGroupContext */]();
        http.get('/assets/de.hub.srcrepo.json')
            .map((res) => res.json())
            .subscribe(res => {
            this.setData(res);
        });
        let index = 0;
        this.context.groups.forEach(group => {
            const groupIndex = index++;
            group.subscribe(selected => {
                this.onSelectedChanged(groupIndex, selected);
            });
        });
    }
    addChart() {
        const groups = Array.from(this.groupSelection.values);
        const item = {
            gridItemConfig: this.createGridItemConfig(),
            chartConfig: {
                component: this.chartConfig.type,
                dimensions: this.chartsConfig.dimensions,
                scroll: this.chartConfig.scroll
            },
            name: this.chartConfig.type,
            groups: groups,
            parentGroup: this.sourceGroup,
            source: this.source,
            pattern: this.code,
        };
        this.chartConfig.dimensionProperties.forEach(dim => {
            item.chartConfig[dim.name] = dim.value;
        });
        this.items.push(item);
        // compute groups available for source and add to group members
        groups.forEach(group => {
            if (this.availableGroups.indexOf(group) == -1) {
                this.availableGroups.push(group);
            }
            this.groupMember[group].push(item);
        });
        // update group children
        if (item.parentGroup != -1) {
            this.groupChildren[this.sourceGroup].push(item);
        }
    }
    createGridItemConfig() {
        return {
            sizex: 2,
            sizey: 2,
            borderSize: 5,
            resizeable: true,
            dragHandle: '.title'
        };
    }
    removeItem(index) {
        const item = this.items[index];
        this.items.splice(index, 1);
        // update group children
        if (item.parentGroup != -1) {
            this.groupChildren[item.parentGroup].splice(this.groupChildren[item.parentGroup].indexOf(item), 1);
        }
        // update group member and groups available as source
        item.groups.forEach(group => {
            const member = this.groupMember[group];
            member.splice(member.indexOf(item), 1);
            if (member.length == 0) {
                this.availableGroups.splice(this.availableGroups.indexOf(group), 1);
            }
        });
    }
    onSelectedChanged(group, selected) {
        if (this.sourceGroup == group) {
            this.source = selected;
        }
        this.groupChildren[group].forEach(item => {
            item.source = selected;
        });
    }
    onSourceGroupChanged(group) {
        this.sourceGroup = group;
        const selectableGroups = Array.from(this.groups);
        if (group == -1) {
            this.source = this.data;
        }
        else {
            this.source = this.context.groups[group].getSelected();
            selectableGroups.splice(group, 1);
        }
        this.selectableGroups = selectableGroups;
    }
    // code viz specific stuff
    setData(data) {
        if (data) {
            data.forEach(data => {
                const pkgs = this.aggregatePackageDependencies(data);
                this.normalizePackageDependencies(pkgs);
            });
            this.source = data;
            this.data = data;
        }
    }
    aggregatePackageDependencies(data) {
        const pkgs = [];
        function visit(element) {
            if (element.type == "package" && element.children) {
                const dMap = {};
                element.children.filter(function (c) { return c.type == "type"; }).forEach(function (c) {
                    if (c.dependencies) {
                        c.dependencies.forEach(function (d) {
                            const pkgId = d.id.substring(0, d.id.lastIndexOf("/"));
                            if (dMap[pkgId]) {
                                dMap[pkgId] = dMap[pkgId] + d.value;
                            }
                            else {
                                dMap[pkgId] = d.value;
                            }
                        });
                    }
                });
                if (Object.keys(dMap).length != 0) {
                    element.dependencies = [];
                    for (let key in dMap) {
                        if (dMap.hasOwnProperty(key)) {
                            element.dependencies.push({
                                "id": key,
                                "value": dMap[key]
                            });
                        }
                    }
                    pkgs.push(element);
                }
            }
            if (element.children) {
                element.children.forEach(function (child) {
                    visit(child);
                });
            }
        }
        visit(data);
        return pkgs;
    }
    normalizePackageDependencies(pkgs) {
        const pMap = {};
        pkgs.forEach(function (p) {
            pMap[p.id] = p;
        });
        pkgs.forEach(function (p) {
            if (p.dependencies) {
                p.dependencies.forEach(function (d) {
                    if (pMap[d.id]) {
                        if (!pMap[d.id].dependencies) {
                            pMap[d.id].dependencies = [];
                        }
                        let otherD = pMap[d.id].dependencies.find(function (dd) { return dd.id == p.id; });
                        if (!otherD) {
                            otherD = { "id": p.id, "value": 0 };
                            pMap[d.id].dependencies.push(otherD);
                        }
                        otherD.value += d.value;
                    }
                });
            }
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ViewChild */])('groupSelection'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_selection_component__["a" /* D3ngGroupSelectionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_d3ng_groups_selection_component__["a" /* D3ngGroupSelectionComponent */]) === "function" && _a || Object)
], D3ngWorkbenchComponent.prototype, "groupSelection", void 0);
D3ngWorkbenchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'd3ng-workbench',
        template: __webpack_require__(305),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], D3ngWorkbenchComponent);

var _a, _b;
//# sourceMappingURL=d3ng-workbench.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

D3ngPatternParser = /*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
  (function() {
    "use strict";

    function peg$subclass(child, parent) {
      function ctor() { this.constructor = child; }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
    }

    function peg$SyntaxError(message, expected, found, location) {
      this.message  = message;
      this.expected = expected;
      this.found    = found;
      this.location = location;
      this.name     = "SyntaxError";

      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
      }
    }

    peg$subclass(peg$SyntaxError, Error);

    peg$SyntaxError.buildMessage = function(expected, found) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
            i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }

      function literalEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/"/g,  '\\"')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
      }

      function classEscape(s) {
        return s
          .replace(/\\/g, '\\\\')
          .replace(/\]/g, '\\]')
          .replace(/\^/g, '\\^')
          .replace(/-/g,  '\\-')
          .replace(/\0/g, '\\0')
          .replace(/\t/g, '\\t')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
          .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
          .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
      }

      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
      }

      function describeExpected(expected) {
        var descriptions = new Array(expected.length),
          i, j;

        for (i = 0; i < expected.length; i++) {
          descriptions[i] = describeExpectation(expected[i]);
        }

        descriptions.sort();

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }
          descriptions.length = j;
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0];

          case 2:
            return descriptions[0] + " or " + descriptions[1];

          default:
            return descriptions.slice(0, -1).join(", ")
              + ", or "
              + descriptions[descriptions.length - 1];
        }
      }

      function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input";
      }

      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };

    function peg$parse(input, options) {
      options = options !== void 0 ? options : {};

      var peg$FAILED = {},

        peg$startRuleFunctions = { Pattern: peg$parsePattern },
        peg$startRuleFunction  = peg$parsePattern,

        peg$c0 = "/",
        peg$c1 = peg$literalExpectation("/", false),
        peg$c2 = function(head, tail) {
          var result = [ head ], i;
          if (tail) {
            for (i = 0; i < tail.length; i++) {
              result.push(tail[i][2])
            }
          }
          return result;
        },
        peg$c3 = "!",
        peg$c4 = peg$literalExpectation("!", false),
        peg$c5 = "+",
        peg$c6 = peg$literalExpectation("+", false),
        peg$c7 = function(negated, typeRef, limit, notFlat) {
          var result = { type: typeRef };
          if (limit) {
            result["limit"] = limit;
          }
          result["flat"] = notFlat == null;
          return result;
        },
        peg$c8 = "[",
        peg$c9 = peg$literalExpectation("[", false),
        peg$c10 = "]",
        peg$c11 = peg$literalExpectation("]", false),
        peg$c12 = function(negated, typeNegated, typeRef) {
          var result = { type: typeRef };
          if (negated) result["isNegated"] = true;
          if (typeNegated) result["isTypeNegated"] = true;
          return result;
        },
        peg$c13 = ".",
        peg$c14 = peg$literalExpectation(".", false),
        peg$c15 = peg$otherExpectation("id"),
        peg$c16 = /^[a-zA-Z_]/,
        peg$c17 = peg$classExpectation([["a", "z"], ["A", "Z"], "_"], false, false),
        peg$c18 = /^[a-zA-Z0-9_]/,
        peg$c19 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_"], false, false),
        peg$c20 = function() { return text(); },
        peg$c21 = peg$otherExpectation("whitespace"),
        peg$c22 = /^[ \t\n\r]/,
        peg$c23 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false),

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }

        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }

      function text() {
        return input.substring(peg$savedPos, peg$currPos);
      }

      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
      }

      function expected(description, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildStructuredError(
          [peg$otherExpectation(description)],
          input.substring(peg$savedPos, peg$currPos),
          location
        );
      }

      function error(message, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

        throw peg$buildSimpleError(message, location);
      }

      function peg$literalExpectation(text, ignoreCase) {
        return { type: "literal", text: text, ignoreCase: ignoreCase };
      }

      function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
      }

      function peg$anyExpectation() {
        return { type: "any" };
      }

      function peg$endExpectation() {
        return { type: "end" };
      }

      function peg$otherExpectation(description) {
        return { type: "other", description: description };
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos], p;

        if (details) {
          return details;
        } else {
          p = pos - 1;
          while (!peg$posDetailsCache[p]) {
            p--;
          }

          details = peg$posDetailsCache[p];
          details = {
            line:   details.line,
            column: details.column
          };

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++;
              details.column = 1;
            } else {
              details.column++;
            }

            p++;
          }

          peg$posDetailsCache[pos] = details;
          return details;
        }
      }

      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

        return {
          start: {
            offset: startPos,
            line:   startPosDetails.line,
            column: startPosDetails.column
          },
          end: {
            offset: endPos,
            line:   endPosDetails.line,
            column: endPosDetails.column
          }
        };
      }

      function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) { return; }

        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos;
          peg$maxFailExpected = [];
        }

        peg$maxFailExpected.push(expected);
      }

      function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
      }

      function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(
          peg$SyntaxError.buildMessage(expected, found),
          expected,
          found,
          location
        );
      }

      function peg$parsePattern() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        s0 = peg$currPos;
        s1 = peg$parseSegment();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 47) {
              s5 = peg$c0;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c1); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseSegment();
                if (s7 !== peg$FAILED) {
                  s5 = [s5, s6, s7];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 47) {
                s5 = peg$c0;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c1); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseSegment();
                  if (s7 !== peg$FAILED) {
                    s5 = [s5, s6, s7];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c2(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseSegment() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 33) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseTypeRef();
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseLimit();
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 43) {
                      s7 = peg$c5;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c6); }
                    }
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c7(s1, s3, s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseLimit() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 33) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 91) {
              s3 = peg$c8;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 33) {
                  s5 = peg$c3;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c4); }
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseTypeRef();
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s9 = peg$c10;
                          peg$currPos++;
                        } else {
                          s9 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c11); }
                        }
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c12(s1, s5, s7);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTypeRef() {
        var s0;

        s0 = peg$parseID();
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s0 = peg$c13;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
        }

        return s0;
      }

      function peg$parseID() {
        var s0, s1, s2, s3;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c16.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c17); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          if (peg$c18.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c19); }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c20();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }

        return s0;
      }

      function peg$parse_() {
        var s0, s1;

        peg$silentFails++;
        s0 = [];
        if (peg$c22.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c23); }
        }
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c22.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }

        return s0;
      }

      peg$result = peg$startRuleFunction();

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail(peg$endExpectation());
        }

        throw peg$buildStructuredError(
          peg$maxFailExpected,
          peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
          peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
        );
      }
    }

    return {
      SyntaxError: peg$SyntaxError,
      parse:       peg$parse
    };
  })();


/***/ })

},[558]);
//# sourceMappingURL=main.bundle.js.map