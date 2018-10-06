webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "app-container {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background: url(\"/assets/images/background.jpg\");\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n* {\r\n    font-family: Raleway,Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-container></app-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leaderboard_leaderboard_component__ = __webpack_require__("./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leaderboard_leaderboard_service__ = __webpack_require__("./src/app/leaderboard/leaderboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_game_service__ = __webpack_require__("./src/app/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_container_component__ = __webpack_require__("./src/app/container/container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_5__leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__container_container_component__["a" /* ContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__leaderboard_leaderboard_service__["a" /* LeaderboardService */],
                __WEBPACK_IMPORTED_MODULE_8__game_game_service__["a" /* GameService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/goblin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goblin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_animation_goblinMeleeAttack__ = __webpack_require__("./src/app/game/animation/goblinMeleeAttack.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_animation_goblinWalkAnimation__ = __webpack_require__("./src/app/game/animation/goblinWalkAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_animation_goblinDeathAnimation__ = __webpack_require__("./src/app/game/animation/goblinDeathAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iCharacter__ = __webpack_require__("./src/app/classes/iCharacter.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MOVE_ACTION = 'LHGames.Actions.MoveAction';
var MELEE_ATTACK_ACTION = 'LHGames.Actions.MeleeAttackAction';
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin(info, positionModifier, scaleModifier, totalMapSize) {
        var _this = _super.call(this, info, positionModifier, scaleModifier, null, totalMapSize) || this;
        _this.haveToRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        return _this;
    }
    Goblin.prototype.animate = function (action) {
        if (!action) {
            return;
        }
        this.respawn(this.characterPosition);
        switch (action.type) {
            case MOVE_ACTION:
                var moveAction = action;
                this.walk(moveAction.direction);
                break;
            case MELEE_ATTACK_ACTION:
                var meleeAttackAction = action;
                this.meleeAttack(meleeAttackAction.direction);
                break;
            default:
                break;
        }
    };
    Goblin.prototype.respawn = function (position) {
        this.info.position = position;
        this.updateCharacterPosition(this.info.position);
        this.walkAnimation.reset();
        this.setCurrentAnimation(this.walkAnimation);
    };
    Goblin.prototype.die = function (point) {
        var _this = this;
        if (this.deathAnimation === undefined) {
            return;
        }
        if (this.currentAnimation.isPlaying()) {
            var subscription_1 = this.currentAnimation.animationDone.subscribe(function (_) {
                subscription_1.unsubscribe();
                _this.die(point);
            });
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.deathAnimation) {
            this.setCurrentAnimation(this.deathAnimation);
        }
        this.currentAnimation.execute(null);
    };
    Goblin.prototype.walk = function (direction) {
        if (this.walkAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.walkAnimation) {
            this.setCurrentAnimation(this.walkAnimation);
        }
        this.playAnimation(direction);
        this.move(direction);
    };
    Goblin.prototype.meleeAttack = function (direction) {
        if (this.meleeAttackAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.meleeAttackAnimation) {
            this.setCurrentAnimation(this.meleeAttackAnimation);
        }
        this.playAnimation(direction);
    };
    Goblin.prototype.createAnimations = function (scaleModifier, color) {
        var _this = this;
        this.deathAnimation = new __WEBPACK_IMPORTED_MODULE_3__game_animation_goblinDeathAnimation__["a" /* GoblinDeathAnimation */](this.info.name, this.spritePosition, scaleModifier);
        this.deathAnimation.finishedAnimation.subscribe(function (_) {
            _this.haveToRemove.emit();
        });
        this.meleeAttackAnimation = new __WEBPACK_IMPORTED_MODULE_1__game_animation_goblinMeleeAttack__["a" /* GoblinMeleeAttackAnimation */](this.info.name, this.spritePosition, scaleModifier);
        this.walkAnimation = new __WEBPACK_IMPORTED_MODULE_2__game_animation_goblinWalkAnimation__["a" /* GoblinWalkAnimation */](this.info.name, this.spritePosition, scaleModifier);
        this.currentAnimation = this.walkAnimation;
    };
    Goblin.prototype.updateAnimation = function () {
        if (this.meleeAttackAnimation) {
            this.meleeAttackAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.walkAnimation) {
            this.walkAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.deathAnimation) {
            this.deathAnimation.update(this.spritePosition, this.scaleModifier);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Goblin.prototype, "haveToRemove", void 0);
    return Goblin;
}(__WEBPACK_IMPORTED_MODULE_4__iCharacter__["a" /* ICharacter */]));



/***/ }),

/***/ "./src/app/classes/iCharacter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICharacter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__ = __webpack_require__("./src/app/shared/animation/animationDirection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ICharacter = /** @class */ (function () {
    function ICharacter(info, positionModifier, scaleModifier, color, totalMapSize) {
        this.changeAnimation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.info = info;
        this.characterPosition = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"](this.info.position.x, this.info.position.y);
        this.spritePosition = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"]();
        this.update(this.info, positionModifier, scaleModifier, totalMapSize);
        this.createAnimations(scaleModifier, color);
    }
    ICharacter.prototype.setCurrentAnimation = function (anim) {
        this.currentAnimation.endAnimation();
        anim.position = this.currentAnimation.position;
        var oldAnimation = this.currentAnimation;
        this.currentAnimation = anim;
        this.changeAnimation.emit({ oldAnimation: oldAnimation, newAnimation: this.currentAnimation });
    };
    ICharacter.prototype.calculatePositionOnScreen = function () {
        this.spritePosition.x = (this.totalMapSize.x + ((this.characterPosition.x -
            this.positionModifier.x) % this.totalMapSize.x)) % this.totalMapSize.x;
        this.spritePosition.y = (this.totalMapSize.y + ((this.characterPosition.y -
            this.positionModifier.y) % this.totalMapSize.y)) % this.totalMapSize.y;
        this.spritePosition.x *= this.scaleModifier.x;
        this.spritePosition.y *= this.scaleModifier.y;
    };
    ICharacter.prototype.getAnimationDirectionFromVector = function (direction) {
        if (direction.y === 0 && direction.x === -1) {
            return __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT;
        }
        else if (direction.y === 0 && direction.x === 1) {
            return __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT;
        }
        else if (direction.y === -1 && direction.x === 0) {
            return __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].UP;
        }
        else if (direction.y === 1 && direction.x === 0) {
            return __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN;
        }
        return null;
    };
    ICharacter.prototype.move = function (direction) {
        this.characterPosition.x += direction.x;
        this.characterPosition.y += direction.y;
    };
    ICharacter.prototype.playAnimation = function (directionPt) {
        var direction = this.getAnimationDirectionFromVector(directionPt);
        if (Object.values(__WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */]).includes(direction)) {
            this.currentAnimation.execute(direction);
        }
    };
    ICharacter.prototype.update = function (characterInfo, positionModifier, scaleModifier, totalMapSize) {
        this.info = characterInfo;
        this.positionModifier = positionModifier;
        this.scaleModifier = scaleModifier;
        this.totalMapSize = totalMapSize;
        this.updateCharacterPosition(this.info.position);
    };
    ICharacter.prototype.updateCharacterPosition = function (position) {
        if (this.currentAnimation) {
            this.currentAnimation.endAnimation();
        }
        this.characterPosition = position;
        this.spritePosition = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"]();
        this.calculatePositionOnScreen();
        this.updateAnimation();
    };
    ICharacter.prototype.getCurrentPosition = function () {
        return this.characterPosition;
    };
    ICharacter.prototype.getCurrentAnimation = function () {
        return this.currentAnimation;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ICharacter.prototype, "changeAnimation", void 0);
    return ICharacter;
}());



/***/ }),

/***/ "./src/app/classes/items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PurchasableItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpgradeType; });
/* unused harmony export ItemURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var PurchasableItem;
(function (PurchasableItem) {
    PurchasableItem[PurchasableItem["Sword"] = 0] = "Sword";
    PurchasableItem[PurchasableItem["Shield"] = 1] = "Shield";
    PurchasableItem[PurchasableItem["Backpack"] = 2] = "Backpack";
    PurchasableItem[PurchasableItem["Pickaxe"] = 3] = "Pickaxe";
    PurchasableItem[PurchasableItem["HealthPotion"] = 4] = "HealthPotion";
})(PurchasableItem || (PurchasableItem = {}));
var UpgradeType;
(function (UpgradeType) {
    UpgradeType[UpgradeType["CarryingCapacity"] = 0] = "CarryingCapacity";
    UpgradeType[UpgradeType["AttackPower"] = 1] = "AttackPower";
    UpgradeType[UpgradeType["Defence"] = 2] = "Defence";
    UpgradeType[UpgradeType["MaximumHealth"] = 3] = "MaximumHealth";
    UpgradeType[UpgradeType["CollectingSpeed"] = 4] = "CollectingSpeed";
    UpgradeType[UpgradeType["Potion"] = 5] = "Potion"; // Potion added for animation
})(UpgradeType || (UpgradeType = {}));
var ItemURL;
(function (ItemURL) {
    ItemURL["Sword"] = "../../assets/images/items/sword.png";
    ItemURL["Shield"] = "../../assets/images/items/shield.png";
    // Backpack = '../../assets/images/items/backpack.png',
    ItemURL["Pickaxe"] = "../../assets/images/items/pickaxe.png";
})(ItemURL || (ItemURL = {}));
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.convertToUpgrade = function (item) {
        switch (item) {
            case PurchasableItem.Backpack:
                return UpgradeType.CarryingCapacity;
            case PurchasableItem.HealthPotion:
                return UpgradeType.Potion;
            case PurchasableItem.Pickaxe:
                return UpgradeType.CollectingSpeed;
            case PurchasableItem.Shield:
                return UpgradeType.Defence;
            case PurchasableItem.Sword:
                return UpgradeType.AttackPower;
            default:
                break;
        }
    };
    Item.convertToPurchase = function (item) {
        switch (item) {
            case UpgradeType.CarryingCapacity:
                return PurchasableItem.Backpack;
            case UpgradeType.Potion:
                return PurchasableItem.HealthPotion;
            case UpgradeType.CollectingSpeed:
                return PurchasableItem.Pickaxe;
            case UpgradeType.Defence:
                return PurchasableItem.Shield;
            case UpgradeType.AttackPower:
                return PurchasableItem.Sword;
            default:
                break;
        }
    };
    Item.getUrl = function (item) {
        switch (item) {
            // case PurchasableItem.Backpack:
            //     return ItemURL.Backpack;
            case PurchasableItem.Pickaxe:
                return ItemURL.Pickaxe;
            case PurchasableItem.Shield:
                return ItemURL.Shield;
            case PurchasableItem.Sword:
                return ItemURL.Sword;
            default:
                return null;
        }
    };
    Item.getItem = function (itemName) {
        switch (itemName) {
            case 'Backpack':
                return PurchasableItem.Backpack;
            case 'Pickaxe':
                return PurchasableItem.Pickaxe;
            case 'Shield':
                return PurchasableItem.Shield;
            case 'Sword':
                return PurchasableItem.Sword;
            case 'Health Potion':
                return PurchasableItem.Backpack;
            default:
                return null;
        }
    };
    return Item;
}());



/***/ }),

/***/ "./src/app/classes/map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tiletype__ = __webpack_require__("./src/app/classes/tiletype.ts");


var PNG_RESOLUTION = 128;
var Map = /** @class */ (function () {
    function Map(screen, height, width, center) {
        this.appScreen = screen;
        this.mapInfo = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Rectangle"](center.x, center.y, width, height);
        this.container = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Container"]();
        this.initGrassBackground();
    }
    Map.prototype.getMapContainer = function () {
        return this.container;
    };
    Map.prototype.getGrassBackground = function () {
        return this.grassBackground;
    };
    Map.prototype.getCentralPosition = function () {
        return new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](this.mapInfo.x, this.mapInfo.y);
    };
    Map.prototype.getMapInfo = function () {
        return this.mapInfo;
    };
    Map.prototype.update = function (tiles, playerSpritesheet) {
        if (!tiles || tiles.length === 0 || tiles[0].length === 0) {
            return false;
        }
        var hasChanged = this.updateSize(tiles.length, tiles[0].length);
        this.container.removeChildren();
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[i].length; j++) {
                var sprite = void 0;
                switch (tiles[i][j].content) {
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].House:
                        var guid = tiles[i][j].data;
                        sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources['house_' + playerSpritesheet[guid]].texture);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Lava:
                        sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.lava.texture);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Resource:
                        if (tiles[i][j].data.toLowerCase() === 'true') {
                            sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.highDensityResource.texture);
                        }
                        else {
                            sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.resource.texture);
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Shop:
                        sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.shop.texture);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Wall:
                        sprite = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Sprite"](__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.wall.texture);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Player: // animatedSprite is used
                    case __WEBPACK_IMPORTED_MODULE_1__tiletype__["a" /* TileType */].Tile: // Nothing to show
                    default:
                        break;
                }
                if (sprite !== undefined) {
                    sprite.anchor.x = 0.5;
                    sprite.anchor.y = 0.5;
                    sprite.scale.set(Math.round(this.appScreen.width / this.mapInfo.width) / sprite.width);
                    sprite.x = i * Math.round(this.appScreen.height / this.mapInfo.height);
                    sprite.y = (j % this.mapInfo.width) * Math.round(this.appScreen.width / this.mapInfo.width);
                    this.container.addChild(sprite);
                }
            }
        }
        return hasChanged;
    };
    Map.prototype.onResize = function (newSize) {
        this.appScreen.width = newSize.x;
        this.appScreen.height = newSize.y;
        this.initGrassBackground();
    };
    Map.prototype.setCentralPosition = function (position) {
        var hasChanged = this.mapInfo.x !== position.x || this.mapInfo.y !== position.y;
        if (hasChanged) {
            this.mapInfo.x = position.x;
            this.mapInfo.y = position.y;
        }
        return hasChanged;
    };
    Map.prototype.initGrassBackground = function () {
        this.grassBackground = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["extras"].TilingSprite(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].resources.grass.texture, this.appScreen.width, this.appScreen.height);
        this.grassBackground.cacheAsBitmap = true;
        var scale = Math.ceil(this.mapInfo.width / (this.appScreen.width / PNG_RESOLUTION));
        this.grassBackground.tileScale.set(1 / scale, 1 / scale);
    };
    Map.prototype.updateSize = function (height, width) {
        var hasChanged = this.mapInfo.width !== width || this.mapInfo.height !== height;
        if (hasChanged) {
            this.mapInfo.width = width;
            this.mapInfo.height = height;
        }
        return hasChanged;
    };
    return Map;
}());



/***/ }),

/***/ "./src/app/classes/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_animation_walkAnimation__ = __webpack_require__("./src/app/game/animation/walkAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_animation_miningAnimation__ = __webpack_require__("./src/app/game/animation/miningAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_animation_meleeAttackAnimation__ = __webpack_require__("./src/app/game/animation/meleeAttackAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_animation_deathAnimation__ = __webpack_require__("./src/app/game/animation/deathAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_animation_healAnimation__ = __webpack_require__("./src/app/game/animation/healAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items__ = __webpack_require__("./src/app/classes/items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_animation_upgradeAnimation__ = __webpack_require__("./src/app/game/animation/upgradeAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_merge_images__ = __webpack_require__("./node_modules/merge-images/dist/index.es2015.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__iCharacter__ = __webpack_require__("./src/app/classes/iCharacter.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var MOVE_ACTION = 'LHGames.Actions.MoveAction';
var COLLECT_ACTION = 'LHGames.Actions.CollectAction';
var MELEE_ATTACK_ACTION = 'LHGames.Actions.MeleeAttackAction';
var HEAL_ACTION = 'LHGames.Actions.HealAction';
var UPGRADE_ACTION = 'LHGames.Actions.UpgradeAction';
var PURCHASE_ACTION = 'LHGames.Actions.PurchaseAction';
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(info, positionModifier, scaleModifier, color, totalMapSize) {
        var _this = _super.call(this, info, positionModifier, scaleModifier, color, totalMapSize) || this;
        _this.items = [];
        _this.color = color;
        return _this;
    }
    Player.prototype.animate = function (action) {
        if (!action) {
            return;
        }
        for (var _i = 0, _a = action.source.items; _i < _a.length; _i++) {
            var itemServer = _a[_i];
            var item = __WEBPACK_IMPORTED_MODULE_6__items__["a" /* Item */].getItem(itemServer.name);
            // No special texture added to the spritesheet for those items
            if (item !== __WEBPACK_IMPORTED_MODULE_6__items__["b" /* PurchasableItem */].HealthPotion && item !== __WEBPACK_IMPORTED_MODULE_6__items__["b" /* PurchasableItem */].Backpack) {
                if (!Object.values(this.items).includes(item)) {
                    this.updateTexture(item);
                }
            }
        }
        this.respawn(this.characterPosition);
        this.checkIfDying();
        switch (action.type) {
            case MOVE_ACTION:
                var moveAction = action;
                this.walk(moveAction.direction);
                break;
            case COLLECT_ACTION:
                var collectAction = action;
                this.mining(collectAction.direction);
                break;
            case MELEE_ATTACK_ACTION:
                var meleeAttackAction = action;
                this.meleeAttack(meleeAttackAction.direction);
                break;
            case HEAL_ACTION:
                this.heal();
                break;
            case UPGRADE_ACTION:
                var upgradeAction = action;
                this.upgrade(upgradeAction.upgradeType);
                break;
            case PURCHASE_ACTION:
                var purchaseAction = action;
                this.buy(purchaseAction.item);
                break;
            default:
                break;
        }
    };
    Player.prototype.respawn = function (position) {
        this.info.position = position;
        this.updateCharacterPosition(this.info.position);
        this.walkAnimation.reset();
        this.setCurrentAnimation(this.walkAnimation);
    };
    Player.prototype.die = function (point) {
        var _this = this;
        if (this.deathAnimation === undefined) {
            return;
        }
        if (this.currentAnimation.isPlaying()) {
            var subscription_1 = this.currentAnimation.animationDone.subscribe(function (_) {
                subscription_1.unsubscribe();
                _this.die(point);
            });
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.deathAnimation) {
            this.setCurrentAnimation(this.deathAnimation);
        }
        this.deathAnimation.setSpawnSpot(point);
        this.currentAnimation.execute(null);
    };
    Player.prototype.updateTexture = function (item) {
        var _this = this;
        this.items.push(item);
        var itemUrl = __WEBPACK_IMPORTED_MODULE_6__items__["a" /* Item */].getUrl(item);
        if (itemUrl === null) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_8_merge_images__["a" /* default */])(["../../assets/images/players/link_" + this.color + ".png", itemUrl])
            .then(function (url) { return _this.updateAnimationTextures(url); });
    };
    Player.prototype.updateAnimationTextures = function (imageUrl) {
        var baseTexture = __WEBPACK_IMPORTED_MODULE_0_pixi_js__["BaseTexture"].fromImage(imageUrl);
        this.walkAnimation.updateTexture(baseTexture);
        this.healingAnimation.updateTexture(baseTexture);
        this.meleeAttackAnimation.updateTexture(baseTexture);
        this.miningAnimation.updateTexture(baseTexture);
        this.deathAnimation.updateTexture(baseTexture);
    };
    Player.prototype.walk = function (direction) {
        if (this.walkAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.walkAnimation) {
            this.setCurrentAnimation(this.walkAnimation);
        }
        this.playAnimation(direction);
        this.move(direction);
    };
    Player.prototype.mining = function (direction) {
        if (this.miningAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.miningAnimation) {
            this.setCurrentAnimation(this.miningAnimation);
        }
        this.playAnimation(direction);
    };
    Player.prototype.meleeAttack = function (direction) {
        if (this.meleeAttackAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.meleeAttackAnimation) {
            this.setCurrentAnimation(this.meleeAttackAnimation);
        }
        this.playAnimation(direction);
    };
    Player.prototype.heal = function () {
        if (this.healingAnimation === undefined) {
            return;
        }
        if (this.currentAnimation === undefined || this.currentAnimation !== this.healingAnimation) {
            this.setCurrentAnimation(this.healingAnimation);
        }
        this.currentAnimation.execute(null);
    };
    Player.prototype.upgrade = function (upgradeType) {
        if (this.upgradeAnimation === undefined) {
            return;
        }
        var purchaseItem = __WEBPACK_IMPORTED_MODULE_6__items__["a" /* Item */].convertToPurchase(upgradeType);
        var hasItem = Object.values(this.items).includes(purchaseItem);
        this.upgradeAnimation.setUpgradeType(upgradeType, hasItem);
        if (this.currentAnimation === undefined || this.currentAnimation !== this.upgradeAnimation) {
            this.setCurrentAnimation(this.upgradeAnimation);
        }
        this.currentAnimation.execute(null);
    };
    Player.prototype.buy = function (item) {
        this.updateTexture(item);
        this.upgrade(__WEBPACK_IMPORTED_MODULE_6__items__["a" /* Item */].convertToUpgrade(item));
    };
    Player.prototype.checkIfDying = function () {
        if (this.currentAnimation.isPlaying() && this.currentAnimation === this.deathAnimation) {
            this.deathAnimation.startRespawn();
        }
    };
    Player.prototype.createAnimations = function (scaleModifier, color) {
        var _this = this;
        this.deathAnimation = new __WEBPACK_IMPORTED_MODULE_4__game_animation_deathAnimation__["a" /* DeathAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.deathAnimation.finishedAnimation.subscribe(function (spawnSpot) {
            _this.respawn(spawnSpot);
        });
        this.upgradeAnimation = new __WEBPACK_IMPORTED_MODULE_7__game_animation_upgradeAnimation__["a" /* UpgradeAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.miningAnimation = new __WEBPACK_IMPORTED_MODULE_2__game_animation_miningAnimation__["a" /* MiningAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.meleeAttackAnimation = new __WEBPACK_IMPORTED_MODULE_3__game_animation_meleeAttackAnimation__["a" /* MeleeAttackAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.healingAnimation = new __WEBPACK_IMPORTED_MODULE_5__game_animation_healAnimation__["a" /* HealingAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.walkAnimation = new __WEBPACK_IMPORTED_MODULE_1__game_animation_walkAnimation__["a" /* WalkAnimation */](this.info.name, this.spritePosition, scaleModifier, color);
        this.currentAnimation = this.walkAnimation;
    };
    Player.prototype.updateAnimation = function () {
        if (this.healingAnimation) {
            this.healingAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.meleeAttackAnimation) {
            this.meleeAttackAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.miningAnimation) {
            this.miningAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.walkAnimation) {
            this.walkAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.deathAnimation) {
            this.deathAnimation.update(this.spritePosition, this.scaleModifier);
        }
        if (this.upgradeAnimation) {
            this.upgradeAnimation.update(this.spritePosition, this.scaleModifier);
        }
    };
    return Player;
}(__WEBPACK_IMPORTED_MODULE_9__iCharacter__["a" /* ICharacter */]));



/***/ }),

/***/ "./src/app/classes/scene.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__("./src/app/classes/map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_player__ = __webpack_require__("./src/app/classes/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goblin__ = __webpack_require__("./src/app/classes/goblin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TILES_PER_ROW_DEFAULT = 31;
var TILES_PER_COLUMN_DEFAULT = 31;
var MIDDLE_POSITION_DEFAULT = 16;
var PLAYER_JSON_PATH = 'assets/jsons/link_';
var UPGRADE_JSON_PATH = 'assets/jsons/upgrade_';
var HOUSE_PNG_PATH = 'assets/images/tiles/house_';
var assets = [
    { name: 'grass', path: 'assets/images/tiles/grass.png' },
    { name: 'wall', path: 'assets/images/tiles/wall.png' },
    { name: 'lava', path: 'assets/images/tiles/lava.png' },
    { name: 'resource', path: 'assets/images/tiles/resource.png' },
    { name: 'highDensityResource', path: 'assets/images/tiles/highDensityResource.png' },
    { name: 'shop', path: 'assets/images/tiles/shop.png' },
    { name: 'goblin', path: 'assets/jsons/enemy.json' }
];
var Scene = /** @class */ (function () {
    function Scene(playerSpritesheets, sceneSize) {
        this.playerSpritesheets = playerSpritesheets;
        this.players = [];
        this.sceneLoaded = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this.app = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Application"]({
            width: sceneSize.x,
            height: sceneSize.y,
            antialias: true,
            transparent: false,
            resolution: 1
        });
        this.loadAssets();
    }
    Object.defineProperty(Scene.prototype, "view", {
        get: function () {
            return this.app.view;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.onResize = function (newSize) {
        this.app.renderer.resize(newSize.x, newSize.y);
        this.app.stage.removeChild(this.map.getGrassBackground());
        this.map.onResize(newSize);
        var grass = this.map.getGrassBackground();
        this.app.stage.addChildAt(grass, 0);
    };
    Scene.prototype.updateMap = function (mapData) {
        if (this.map) {
            return this.map.update(mapData, this.playerSpritesheets);
        }
        return false;
    };
    Scene.prototype.setMapCentralPosition = function (position) {
        if (this.map) {
            return this.map.setCentralPosition(position);
        }
        return false;
    };
    Scene.prototype.getMapCentralPosition = function () {
        return this.map.getCentralPosition();
    };
    Scene.prototype.getMapInfo = function () {
        return this.map.getMapInfo();
    };
    Scene.prototype.playAnimations = function (actions) {
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var action = actions_1[_i];
            var playerId = action.source.playerID;
            if (this.isValidPlayer(playerId)) {
                this.players[playerId].animate(action);
            }
        }
    };
    Scene.prototype.respawnDeadPlayers = function (deadPlayers) {
        for (var _i = 0, deadPlayers_1 = deadPlayers; _i < deadPlayers_1.length; _i++) {
            var deadPlayer = deadPlayers_1[_i];
            if (this.isValidPlayer(deadPlayer.playerId)) {
                this.players[deadPlayer.playerId].die(deadPlayer.houseLocation);
            }
        }
    };
    Scene.prototype.updatePlayers = function (playersInfos, totalMapSize) {
        var _this = this;
        var mapInfo = this.getMapInfo();
        var spriteSize = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](Math.round(this.app.screen.height / mapInfo.height), Math.round(this.app.screen.width / mapInfo.width));
        var positionModifier = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](mapInfo.x - Math.floor(mapInfo.width / 2), Math.ceil(mapInfo.y - mapInfo.height / 2));
        var _loop_1 = function (playerGuid) {
            if (this_1.players[playerGuid]) {
                this_1.players[playerGuid].update(playersInfos[playerGuid], positionModifier, spriteSize, totalMapSize);
            }
            else {
                var newPlayer_1 = this_1.playerSpritesheets[playerGuid] ?
                    new __WEBPACK_IMPORTED_MODULE_2__classes_player__["a" /* Player */](playersInfos[playerGuid], positionModifier, spriteSize, this_1.playerSpritesheets[playerGuid], totalMapSize) :
                    new __WEBPACK_IMPORTED_MODULE_4__goblin__["a" /* Goblin */](playersInfos[playerGuid], positionModifier, spriteSize, totalMapSize);
                if (!this_1.playerSpritesheets[playerGuid]) {
                    newPlayer_1.haveToRemove.subscribe(function (_) {
                        _this.app.stage.removeChild(newPlayer_1.getCurrentAnimation());
                        var index = _this.players.indexOf(newPlayer_1, 0);
                        if (index > -1) {
                            _this.players.splice(index, 1);
                        }
                    });
                }
                newPlayer_1.changeAnimation.subscribe(function (animationObject) {
                    _this.app.stage.removeChild(animationObject.oldAnimation);
                    _this.app.stage.addChild(animationObject.newAnimation);
                });
                this_1.players[playerGuid] = newPlayer_1;
                this_1.app.stage.addChild(newPlayer_1.getCurrentAnimation());
            }
        };
        var this_1 = this;
        for (var playerGuid in playersInfos) {
            _loop_1(playerGuid);
        }
    };
    Scene.prototype.loadAssets = function () {
        var _this = this;
        var addedSpritesheet = [];
        for (var playerGuid in this.playerSpritesheets) {
            if (this.playerSpritesheets[playerGuid]) {
                var spritesheetColor = this.playerSpritesheets[playerGuid];
                if (!addedSpritesheet.includes(spritesheetColor)) {
                    addedSpritesheet.push(spritesheetColor);
                    __WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].add('player_' + spritesheetColor, "" + PLAYER_JSON_PATH + spritesheetColor + ".json");
                    __WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].add('house_' + spritesheetColor, "" + HOUSE_PNG_PATH + spritesheetColor + ".png");
                    __WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].add('upgrade_' + spritesheetColor, "" + UPGRADE_JSON_PATH + spritesheetColor + ".json");
                }
            }
        }
        for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
            var asset = assets_1[_i];
            __WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].add(asset.name, asset.path);
        }
        __WEBPACK_IMPORTED_MODULE_0_pixi_js__["loader"].load(function () {
            _this.onLoaded();
        });
    };
    Scene.prototype.onLoaded = function () {
        this.map = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* Map */](this.app.screen, TILES_PER_COLUMN_DEFAULT, TILES_PER_ROW_DEFAULT, new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](MIDDLE_POSITION_DEFAULT, MIDDLE_POSITION_DEFAULT));
        this.app.stage.addChild(this.map.getGrassBackground());
        this.app.stage.addChild(this.map.getMapContainer());
        this.sceneLoaded.emit();
    };
    Scene.prototype.isValidPlayer = function (playerGuid) {
        return this.players[playerGuid] !== undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */])
    ], Scene.prototype, "sceneLoaded", void 0);
    return Scene;
}());



/***/ }),

/***/ "./src/app/classes/spritesheetColor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteSheetColor; });
var SpriteSheetColor;
(function (SpriteSheetColor) {
    SpriteSheetColor[SpriteSheetColor["red"] = 0] = "red";
    SpriteSheetColor[SpriteSheetColor["blue"] = 1] = "blue";
    SpriteSheetColor[SpriteSheetColor["green"] = 2] = "green";
    SpriteSheetColor[SpriteSheetColor["yellow"] = 3] = "yellow";
    SpriteSheetColor[SpriteSheetColor["pink"] = 4] = "pink";
    SpriteSheetColor[SpriteSheetColor["dark"] = 5] = "dark";
    SpriteSheetColor[SpriteSheetColor["skyBlue"] = 6] = "skyBlue";
    SpriteSheetColor[SpriteSheetColor["purple"] = 7] = "purple";
})(SpriteSheetColor || (SpriteSheetColor = {}));


/***/ }),

/***/ "./src/app/classes/tiletype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileType; });
var TileType;
(function (TileType) {
    TileType[TileType["Tile"] = 0] = "Tile";
    TileType[TileType["Wall"] = 1] = "Wall";
    TileType[TileType["House"] = 2] = "House";
    TileType[TileType["Lava"] = 3] = "Lava";
    TileType[TileType["Resource"] = 4] = "Resource";
    TileType[TileType["Shop"] = 5] = "Shop";
    TileType[TileType["Player"] = 6] = "Player";
})(TileType || (TileType = {}));


/***/ }),

/***/ "./src/app/container/container.component.css":
/***/ (function(module, exports) {

module.exports = "app-game {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 75%;\r\n    float: left;\r\n}\r\n\r\napp-leaderboard {\r\n    width: 25%;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    right: -50%;\r\n    top: 50px;\r\n    position: absolute;\r\n    -webkit-transition: right 300ms ease-in;\r\n    transition: right 300ms ease-in;\r\n}\r\n\r\napp-leaderboard.visible {\r\n    width: 25%;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 0;\r\n    -webkit-transition: right 300ms ease-in;\r\n    transition: right 300ms ease-in;\r\n}\r\n\r\n.tvImg {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -40%);\r\n            transform: translate(-50%, -40%);\r\n    height: 110%;\r\n}\r\n\r\n.gameView {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-51%, -30%);\r\n            transform: translate(-51%, -30%);\r\n}\r\n\r\n.fullScreen {\r\n    left: 0;\r\n    top: 0;\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n}\r\n\r\n.gameCover {\r\n    position: absolute;\r\n    background-color: black;\r\n}\r\n\r\n.hide {\r\n    opacity: 0;\r\n    -webkit-transition: opacity 1000ms ease-in;\r\n    transition: opacity 1000ms ease-in;\r\n}\r\n\r\n.quickHide {\r\n    opacity: 0;\r\n}\r\n\r\n.loadingLogo {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-60%, -32%);\r\n            transform: translate(-60%, -32%);\r\n}\r\n\r\n.glow {\r\n    -webkit-animation: blur-spike 2s ease-in-out infinite alternate;\r\n    animation: blur-spike 2s ease-in-out infinite alternate;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    vertical-align: middle;\r\n    height: 100vh;\r\n    float: left;\r\n    width: 100%;\r\n    -webkit-transition: width 300ms ease-in;\r\n    transition: width 300ms ease-in;\r\n}\r\n\r\n.container.small {\r\n    width: 75%;\r\n    -webkit-transition: width 300ms ease-in;\r\n    transition: width 300ms ease-in;\r\n}\r\n\r\n@-webkit-keyframes blur-spike {\r\n    100% {\r\n        -webkit-filter: blur(60px);\r\n        filter: blur(60px);\r\n    }\r\n}\r\n\r\n@keyframes blur-spike {\r\n    100% {\r\n        -webkit-filter: blur(60px);\r\n        filter: blur(60px);\r\n    }\r\n}\r\n\r\n#leaderboardTitle {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0);\r\n    -webkit-transform-origin: 100% 100%;\r\n            transform-origin: 100% 100%;\r\n    top: 20px;\r\n    right: 10px;\r\n    text-align: center;\r\n    width: 25%;\r\n    position: absolute;\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-transition: all 300ms ease-in;\r\n    transition: all 300ms ease-in;\r\n}\r\n\r\n#leaderboardTitle.rotated {\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n            transform-origin: 100% 100%;\r\n    top: -20px;\r\n    right: 0px;\r\n    -webkit-transition: all 300ms ease-in;\r\n    transition: all 300ms ease-in;\r\n}\r\n\r\n#fullscreenButton {\r\n    position: absolute;\r\n    top: 37%;\r\n    left: 50%;\r\n    font-size: 1.3vh;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 200px;\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    -webkit-border-radius: 10px;\r\n    -webkit-box-shadow: 0px 3px rgba(128, 128, 128, 1), /* gradient effects */\r\n    0px 4px rgba(118, 118, 118, 1), 0px 5px rgba(108, 108, 108, 1), 0px 6px rgba(98, 98, 98, 1), 0px 7px rgba(88, 88, 88, 1), 0px 8px rgba(78, 78, 78, 1), 0px 14px 6px -1px rgba(128, 128, 128, 1);\r\n    /* shadow */\r\n    -webkit-transition: -webkit-box-shadow .1s ease-in-out;\r\n}\r\n\r\n.button span {\r\n    background-color: #E8E8E8;\r\n    background-image: /* gloss gradient */\r\n    -webkit-gradient( linear, left bottom, left top, color-stop(50%, rgba(255, 255, 255, 0)), color-stop(50%, rgba(255, 255, 255, 0.3)), color-stop(100%, rgba(255, 255, 255, 0.2))), /* dark outside gradient */\r\n    -webkit-gradient( linear, left top, right top, color-stop(0%, rgba(210, 210, 210, 0.3)), color-stop(20%, rgba(210, 210, 210, 0)), color-stop(80%, rgba(210, 210, 210, 0)), color-stop(100%, rgba(210, 210, 210, 0.3))), /* light inner gradient */\r\n    -webkit-gradient( linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(20%, rgba(255, 255, 255, 0.5)), color-stop(80%, rgba(255, 255, 255, 0.5)), color-stop(100%, rgba(255, 255, 255, 0))), /* diagonal line pattern */\r\n    -webkit-gradient( linear, 0% 100%, 100% 0%, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(40%, rgba(255, 255, 255, 0)), color-stop(40%, #D2D2D1), color-stop(60%, #D2D2D1), color-stop(60%, rgba(255, 255, 255, 0)), color-stop(100%, rgba(255, 255, 255, 0)));\r\n    -webkit-box-shadow: 0px -1px #fff, /* top highlight */\r\n    0px 1px 1px #FFFFFF;\r\n    /* bottom edge */\r\n    -webkit-background-size: 100%, 100%, 100%, 4px 4px;\r\n    -webkit-border-radius: 10px;\r\n    -webkit-transition: -webkit-transform .1s ease-in-out;\r\n    display: inline-block;\r\n    padding: 1.5vh 1vh 1.5vh 1vh;\r\n    color: #3A474D;\r\n    text-transform: uppercase;\r\n    font-size: 1.3vh;\r\n    text-shadow: 0px 1px #fff, 0px -1px #262F33;\r\n}\r\n\r\n.button span:hover {\r\n    color: blue;\r\n    text-shadow: 0px -1px #97A63A;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:active {\r\n    -webkit-box-shadow: 0px 3px rgba(128, 128, 128, 1), 0px 4px rgba(118, 118, 118, 1), 0px 5px rgba(108, 108, 108, 1), 0px 6px rgba(98, 98, 98, 1), 0px 7px rgba(88, 88, 88, 1), 0px 8px rgba(78, 78, 78, 1), 0px 10px 2px 0px rgba(128, 128, 128, .6);\r\n    /* shadow */\r\n}\r\n\r\n.button:active span {\r\n    -webkit-transform: translate(0, 5px);\r\n    /* depth of button press */\r\n}\r\n\r\n#zoomIn {\r\n    top: 65%;\r\n}\r\n\r\n#zoomOut {\r\n    top: 78%;\r\n}\r\n\r\n#zoomOut, #zoomIn {\r\n    position: absolute;\r\n    left: 50%;\r\n    border-radius: 10vh;\r\n}\r\n\r\n#zoomOut span, #zoomIn span {\r\n    font-size: 4vh;\r\n    text-align: center;\r\n    width: 6vh;\r\n    border-radius: 10vh;\r\n}\r\n\r\n#controls {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n    color: white;\r\n    -webkit-transition: width 300ms ease-in;\r\n    transition: width 300ms ease-in;\r\n}\r\n\r\n#controls>span {\r\n    margin: 0 10px;\r\n}"

/***/ }),

/***/ "./src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [style.width.%]=\"isLeaderboardVisible() ? 75: 100\">\r\n    <!-- Game view -->\r\n    <app-game #gameView class=\"gameView\" [class.fullScreen.active]='isGameFullscreen()' [style.width.px]='gameViewWidth' [style.height.px]='gameViewHeight'>\r\n    </app-game>\r\n\r\n    <!-- Black screen on top of gameview -->\r\n    <div class=\"gameView gameCover\" [class.hide.active]=\"isSceneReady()\" [style.width.px]='gameViewWidth' [style.height.px]='gameViewHeight'>\r\n    </div>\r\n\r\n    <!-- Background glow of Logo -->\r\n    <img [class.hide.active]=\"isSceneReady()\" [class.glow.active]=\"!isSceneReady()\" class=\"loadingLogo\" [style.width.px]='logoWidth'\r\n        src=\"assets/images/logo.png\" />\r\n\r\n    <!-- Logo -->\r\n    <img class=\"loadingLogo\" [class.hide.active]=\"isSceneReady()\" [style.width.px]='logoWidth' src=\"assets/images/logo.png\" />\r\n\r\n    <!-- TV -->\r\n    <img #tvImg class=\"tvImg\" [class.quickHide.active]=\"isGameFullscreen()\" src=\"assets/images/tv.png\" />\r\n\r\n    <!-- Fullscreen button -->\r\n    <a id=\"fullscreenButton\" class=\"button\" [class.quickHide.active]=\"isGameFullscreen()\" [style.transform]=\"'translateX(' + fullscreenButtonOffset + 'px)'\"\r\n        (click)=\"toggleFullscreen()\">\r\n        <span>\r\n            Fullscreen\r\n        </span>\r\n    </a>\r\n\r\n    <a id=\"zoomIn\" class=\"button\" [class.quickHide.active]=\"isGameFullscreen()\" [style.transform]=\"'translateX(' + zoomButtonOffset + 'px)'\"\r\n        (click)=\"this.gameComponent.zoom('in')\">\r\n        <span>\r\n            +\r\n        </span>\r\n    </a>\r\n\r\n    <a id=\"zoomOut\" class=\"button\" [class.quickHide.active]=\"isGameFullscreen()\" [style.transform]=\"'translateX(' + zoomButtonOffset + 'px)'\"\r\n        (click)=\"this.gameComponent.zoom('out')\">\r\n        <span>\r\n            -\r\n        </span>\r\n    </a>\r\n\r\n\r\n    <div id=\"controls\">\r\n        <span>Left: ⇦</span>\r\n        <span>Right: ⇨ </span>\r\n        <span>Up: ⇧</span>\r\n        <span>Down: ⇩</span>\r\n        <span>Zoom in: a</span>\r\n        <span>Zoom out: s</span>\r\n        <span>Exit fullscreen: Esc</span>\r\n    </div>\r\n\r\n</div>\r\n<div>\r\n    <h2 id=\"leaderboardTitle\" [class.rotated.active]=\"!isLeaderboardVisible()\" (click)=\"toggleLeaderboard()\">Leaderboard</h2>\r\n    <app-leaderboard [class.visible.active]=\"isLeaderboardVisible()\"></app-leaderboard>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game_component__ = __webpack_require__("./src/app/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CLOSE_FULLSCREEN = 27; // escape
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(element) {
        this.element = element;
        this._isSceneReady = false;
        this._isLeaderboardVisible = false;
        this._isGameFullscreen = false;
    }
    ContainerComponent.prototype.isSceneReady = function () {
        return this._isSceneReady;
    };
    ContainerComponent.prototype.isLeaderboardVisible = function () {
        return this._isLeaderboardVisible;
    };
    ContainerComponent.prototype.isGameFullscreen = function () {
        return this._isGameFullscreen;
    };
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLogoSize();
        this.gameComponent.sceneReady.subscribe(function (_) {
            _this._isSceneReady = true;
        });
    };
    ContainerComponent.prototype.toggleLeaderboard = function () {
        this._isLeaderboardVisible = !this._isLeaderboardVisible;
    };
    ContainerComponent.prototype.toggleFullscreen = function () {
        this._isGameFullscreen = !this._isGameFullscreen;
        this.calculateVisualsSize();
    };
    ContainerComponent.prototype.onResize = function (event) {
        this.checkLogoSize();
    };
    ContainerComponent.prototype.onKeyDown = function (event) {
        if (event.keyCode === 27) {
            if (this._isGameFullscreen) {
                this.toggleFullscreen();
            }
        }
    };
    ContainerComponent.prototype.checkLogoSize = function () {
        var _this = this;
        if (this.tvImg.nativeElement.width !== 0
            && this.logoWidth !== this.tvImg.nativeElement.width) {
            this.calculateVisualsSize();
            this.gameComponent.onResize(this.gameViewWidth, this.gameViewHeight);
        }
        else {
            setTimeout(function () { return _this.checkLogoSize(); }, 10);
        }
    };
    ContainerComponent.prototype.calculateVisualsSize = function () {
        this.logoWidth = 0.75 * this.tvImg.nativeElement.width;
        if (this.isGameFullscreen()) {
            this.gameViewWidth = window.innerHeight;
            this.gameViewHeight = window.innerHeight;
            this.gameComponent.onResize(this.gameViewWidth, this.gameViewHeight);
        }
        else {
            this.gameViewWidth = 0.9 * this.tvImg.nativeElement.width;
            this.gameViewHeight = 0.515 * this.tvImg.nativeElement.height;
            this.gameComponent.onResize(this.gameViewWidth, this.gameViewHeight);
        }
        this.fullscreenButtonOffset = 0.339 * this.tvImg.nativeElement.width;
        this.zoomButtonOffset = 0.35 * this.tvImg.nativeElement.width;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('tvImg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContainerComponent.prototype, "tvImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__game_game_component__["a" /* GameComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game_game_component__["a" /* GameComponent */])
    ], ContainerComponent.prototype, "gameComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ContainerComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContainerComponent.prototype, "onKeyDown", null);
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-container',
            template: __webpack_require__("./src/app/container/container.component.html"),
            styles: [__webpack_require__("./src/app/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/game/animation/baseAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BaseAnimation = /** @class */ (function (_super) {
    __extends(BaseAnimation, _super);
    function BaseAnimation(textures, gridDimension) {
        var _this = _super.call(this) || this;
        _this.animation = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["extras"].AnimatedSprite(textures);
        _this.animation.loop = false;
        _this.animation.animationSpeed = 0.2;
        _this.addChild(_this.animation);
        _this.initialSize = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Rectangle"](null, null, _this.width, _this.height);
        _this.updateScale(gridDimension);
        _this.animation.anchor.x = 0.5;
        _this.animation.anchor.y = 0.5;
        return _this;
    }
    BaseAnimation.prototype.translateAnimation = function () { };
    BaseAnimation.prototype.execute = function (direction) {
        this.animation.play();
    };
    BaseAnimation.prototype.update = function (newPosition, gridDimension) {
        this.updateScale(gridDimension);
        this.position = newPosition;
    };
    BaseAnimation.prototype.updateScale = function (gridDimension) {
        this.scale.x = gridDimension.x / this.initialSize.width;
        this.scale.y = gridDimension.y / this.initialSize.height;
    };
    return BaseAnimation;
}(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Container"]));



/***/ }),

/***/ "./src/app/game/animation/deathAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeathAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noDirectionPlayerAnimation__ = __webpack_require__("./src/app/game/animation/noDirectionPlayerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NUMBER_DOWN_FRAMES = 5;
var NUMBER_SIDE_FRAMES = 0;
var NUMBER_UP_FRAMES = 0;
var DeathAnimation = /** @class */ (function (_super) {
    __extends(DeathAnimation, _super);
    function DeathAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = DeathAnimation.loadTextures(color, 'dramatic_death', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'dramatic_death';
        _this.finishedAnimation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.animation.onComplete = function () {
            _this.startRespawn();
        };
        return _this;
    }
    DeathAnimation.prototype.endAnimation = function () {
        this.animation.stop();
    };
    DeathAnimation.prototype.startRespawn = function () {
        this.endAnimation();
        this.finishedAnimation.emit(this.spawnSpot);
    };
    DeathAnimation.prototype.execute = function (direction) {
        this.animation.gotoAndPlay(0);
    };
    DeathAnimation.prototype.setSpawnSpot = function (spawnSpot) {
        this.spawnSpot = spawnSpot;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DeathAnimation.prototype, "finishedAnimation", void 0);
    return DeathAnimation;
}(__WEBPACK_IMPORTED_MODULE_1__noDirectionPlayerAnimation__["a" /* NoDirectionPlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/goblinDeathAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoblinDeathAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noDirectionPlayerAnimation__ = __webpack_require__("./src/app/game/animation/noDirectionPlayerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NUMBER_DOWN_FRAMES = 13;
var NUMBER_SIDE_FRAMES = 0;
var NUMBER_UP_FRAMES = 0;
var GoblinDeathAnimation = /** @class */ (function (_super) {
    __extends(GoblinDeathAnimation, _super);
    function GoblinDeathAnimation(username, position, gridDimension) {
        var _this = this;
        var textures = GoblinDeathAnimation.loadTextures('enemy', 'dramatic_death', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'dramatic_death';
        _this.finishedAnimation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    GoblinDeathAnimation.prototype.endAnimation = function () {
        this.animation.stop();
        this.animation.visible = false;
        this.finishedAnimation.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GoblinDeathAnimation.prototype, "finishedAnimation", void 0);
    return GoblinDeathAnimation;
}(__WEBPACK_IMPORTED_MODULE_1__noDirectionPlayerAnimation__["a" /* NoDirectionPlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/goblinMeleeAttack.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoblinMeleeAttackAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NUMBER_DOWN_FRAMES = 4;
var NUMBER_SIDE_FRAMES = 4;
var NUMBER_UP_FRAMES = 4;
var GoblinMeleeAttackAnimation = /** @class */ (function (_super) {
    __extends(GoblinMeleeAttackAnimation, _super);
    function GoblinMeleeAttackAnimation(username, position, gridDimension) {
        var _this = this;
        var textures = GoblinMeleeAttackAnimation.loadTextures('enemy', 'melee', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'melee';
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    return GoblinMeleeAttackAnimation;
}(__WEBPACK_IMPORTED_MODULE_0__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/goblinWalkAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoblinWalkAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__ = __webpack_require__("./src/app/shared/animation/animationDirection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FRAME_RATE = 60;
var NUMBER_DOWN_FRAMES = 4;
var NUMBER_SIDE_FRAMES = 4;
var NUMBER_UP_FRAMES = 4;
var GoblinWalkAnimation = /** @class */ (function (_super) {
    __extends(GoblinWalkAnimation, _super);
    function GoblinWalkAnimation(username, position, gridDimension) {
        var _this = this;
        var textures = GoblinWalkAnimation.loadTextures('enemy', 'walk', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'walk';
        _this.animation.loop = true;
        _this.gridDimension = gridDimension;
        _this.animation.animationSpeed = 0.05;
        return _this;
    }
    GoblinWalkAnimation.prototype.translateAnimation = function () {
        var translationPerFrameWidth = this.gridDimension.x / FRAME_RATE;
        var translationPerFrameHeight = this.gridDimension.y / FRAME_RATE;
        var canStop = false;
        switch (this.currentDirection) {
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].UP:
                this.y -= translationPerFrameHeight;
                canStop = this.y <= this.destinationPoint.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN:
                this.y += translationPerFrameHeight;
                canStop = this.y >= this.destinationPoint.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT:
                this.x -= translationPerFrameWidth;
                canStop = this.x <= this.destinationPoint.x;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT:
                this.x += translationPerFrameWidth;
                canStop = this.x >= this.destinationPoint.x;
                break;
            default:
                this.endAnimation();
                return;
        }
        if (canStop) {
            this.endAnimation();
        }
    };
    GoblinWalkAnimation.prototype.execute = function (direction) {
        this.setDirection(direction);
        this.destinationPoint = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](this.x, this.y);
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].UP:
                this.destinationPoint.y -= this.gridDimension.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN:
                this.destinationPoint.y += this.gridDimension.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT:
                this.destinationPoint.x -= this.gridDimension.x;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT:
                this.destinationPoint.x += this.gridDimension.x;
                break;
            default:
                return;
        }
        PIXI.ticker.shared.add(this.translateAnimation, this);
        this.animation.play();
    };
    GoblinWalkAnimation.prototype.endAnimation = function () {
        PIXI.ticker.shared.remove(this.translateAnimation, this);
        _super.prototype.endAnimation.call(this);
    };
    GoblinWalkAnimation.prototype.update = function (newPosition, gridDimension) {
        _super.prototype.update.call(this, newPosition, gridDimension);
        this.gridDimension = gridDimension;
    };
    GoblinWalkAnimation.prototype.reset = function () {
        this.setDirection(__WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN);
    };
    return GoblinWalkAnimation;
}(__WEBPACK_IMPORTED_MODULE_2__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/healAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealingAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noDirectionPlayerAnimation__ = __webpack_require__("./src/app/game/animation/noDirectionPlayerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NUMBER_DOWN_FRAMES = 10;
var NUMBER_SIDE_FRAMES = 0;
var NUMBER_UP_FRAMES = 0;
var HealingAnimation = /** @class */ (function (_super) {
    __extends(HealingAnimation, _super);
    function HealingAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = HealingAnimation.loadTextures(color, 'potion', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'potion';
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    return HealingAnimation;
}(__WEBPACK_IMPORTED_MODULE_0__noDirectionPlayerAnimation__["a" /* NoDirectionPlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/meleeAttackAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeleeAttackAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NUMBER_DOWN_FRAMES = 9;
var NUMBER_SIDE_FRAMES = 8;
var NUMBER_UP_FRAMES = 7;
var MeleeAttackAnimation = /** @class */ (function (_super) {
    __extends(MeleeAttackAnimation, _super);
    function MeleeAttackAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = MeleeAttackAnimation.loadTextures(color, 'melee', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'melee';
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    return MeleeAttackAnimation;
}(__WEBPACK_IMPORTED_MODULE_0__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/miningAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiningAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NUMBER_DOWN_FRAMES = 4;
var NUMBER_SIDE_FRAMES = 5;
var NUMBER_UP_FRAMES = 6;
var MiningAnimation = /** @class */ (function (_super) {
    __extends(MiningAnimation, _super);
    function MiningAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = MiningAnimation.loadTextures(color, 'mine', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'mine';
        _this.animation.animationSpeed = 0.1;
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    return MiningAnimation;
}(__WEBPACK_IMPORTED_MODULE_0__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/noDirectionPlayerAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoDirectionPlayerAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NoDirectionPlayerAnimation = /** @class */ (function (_super) {
    __extends(NoDirectionPlayerAnimation, _super);
    function NoDirectionPlayerAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoDirectionPlayerAnimation.loadTextures = function (color, actionName, nDownFrames, nSideFrames, nUpFrames) {
        var downTextures = [PIXI.Texture.fromFrame("walk_down_" + color + "_1.png").clone()];
        for (var i = 1; i <= nDownFrames; i++) {
            downTextures.push(PIXI.Texture.fromFrame(actionName + "_" + color + "_" + i + ".png").clone());
        }
        return {
            down: downTextures,
            side: [],
            up: []
        };
    };
    NoDirectionPlayerAnimation.prototype.updateTexture = function (newBaseTexture) {
        this.downTextures.forEach(function (texture) {
            texture.baseTexture = newBaseTexture;
        });
    };
    return NoDirectionPlayerAnimation;
}(__WEBPACK_IMPORTED_MODULE_0__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/playerAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseAnimation__ = __webpack_require__("./src/app/game/animation/baseAnimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animation_animationDirection__ = __webpack_require__("./src/app/shared/animation/animationDirection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animation_usernameProperties__ = __webpack_require__("./src/app/shared/animation/usernameProperties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LEFT_SIDE = 0;
var RIGHT_SIDE = 12;
var PlayerAnimation = /** @class */ (function (_super) {
    __extends(PlayerAnimation, _super);
    function PlayerAnimation(upTextures, downTextures, sideTextures, username, position, gridDimension) {
        var _this = _super.call(this, downTextures, gridDimension) || this;
        _this.animationDone = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* EventEmitter */]();
        _this.upTextures = upTextures;
        _this.downTextures = downTextures;
        _this.sideTextures = sideTextures;
        _this.position = position;
        _this.usernameLabel = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Text"](username, __WEBPACK_IMPORTED_MODULE_3__shared_animation_usernameProperties__["a" /* UsernameProperties */].STYLE);
        _this.usernameLabel.x -= __WEBPACK_IMPORTED_MODULE_3__shared_animation_usernameProperties__["a" /* UsernameProperties */].xOffset(_this.usernameLabel.width);
        _this.usernameLabel.position.y += __WEBPACK_IMPORTED_MODULE_3__shared_animation_usernameProperties__["a" /* UsernameProperties */].Y_OFFSET;
        _this.addChild(_this.usernameLabel);
        _this.actionName = '';
        return _this;
    }
    PlayerAnimation.loadTextures = function (color, actionName, nDownFrames, nSideFrames, nUpFrames) {
        // Put resting frame for each animation except the walk one
        var downTextures = actionName === 'walk' ? [] : [__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame("walk_down_" + color + "_1.png").clone()];
        var sideTextures = actionName === 'walk' ? [] : [__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame("walk_side_" + color + "_1.png").clone()];
        var upTextures = actionName === 'walk' ? [] : [__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame("walk_up_" + color + "_1.png").clone()];
        for (var i = 1; i <= nDownFrames; i++) {
            downTextures.push(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame(actionName + "_down_" + color + "_" + i + ".png").clone());
        }
        for (var i = 1; i <= nSideFrames; i++) {
            sideTextures.push(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame(actionName + "_side_" + color + "_" + i + ".png").clone());
        }
        for (var i = 1; i <= nUpFrames; i++) {
            upTextures.push(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Texture"].fromFrame(actionName + "_up_" + color + "_" + i + ".png").clone());
        }
        return {
            down: downTextures,
            side: sideTextures,
            up: upTextures
        };
    };
    PlayerAnimation.prototype.setDirection = function (direction) {
        this.currentDirection = direction;
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_2__shared_animation_animationDirection__["a" /* AnimationDirection */].UP:
                this.animation.textures = this.upTextures;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN:
                this.animation.textures = this.downTextures;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT:
                this.animation.textures = this.getRotatedSideTexture(LEFT_SIDE);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT:
                this.animation.textures = this.getRotatedSideTexture(RIGHT_SIDE);
                break;
            default:
                return;
        }
    };
    PlayerAnimation.prototype.updateTexture = function (newBaseTexture) {
        this.downTextures.forEach(function (texture) {
            texture.baseTexture = newBaseTexture;
        });
        this.sideTextures.forEach(function (texture) {
            texture.baseTexture = newBaseTexture;
        });
        this.upTextures.forEach(function (texture) {
            texture.baseTexture = newBaseTexture;
        });
    };
    PlayerAnimation.prototype.endAnimation = function () {
        this.animation.gotoAndStop(0);
        this.animationDone.emit();
    };
    PlayerAnimation.prototype.execute = function (direction) {
        this.setDirection(direction);
        _super.prototype.execute.call(this, direction);
    };
    PlayerAnimation.prototype.isPlaying = function () {
        return this.animation.playing;
    };
    PlayerAnimation.prototype.getRotatedSideTexture = function (rotationValue) {
        var flippedTexture = [];
        for (var i = 0; i < this.sideTextures.length; i++) {
            var rotatedTexture = this.sideTextures[i].clone();
            rotatedTexture.rotate = rotationValue;
            flippedTexture.push(rotatedTexture);
        }
        return flippedTexture;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* EventEmitter */])
    ], PlayerAnimation.prototype, "animationDone", void 0);
    return PlayerAnimation;
}(__WEBPACK_IMPORTED_MODULE_1__baseAnimation__["a" /* BaseAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/upgradeAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_items__ = __webpack_require__("./src/app/classes/items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NUMBER_FRAMES = 3;
var NUMBER_DOWN_FRAMES = 0;
var NUMBER_SIDE_FRAMES = 0;
var NUMBER_UP_FRAMES = 0;
var UpgradeAnimation = /** @class */ (function (_super) {
    __extends(UpgradeAnimation, _super);
    function UpgradeAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = UpgradeAnimation.loadTextures(color, 'upgrade', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, [], textures.emptyHand, [], username, position, gridDimension) || this; // give sprite a default texture
        _this.actionName = 'upgrade';
        _this.backpackTexture = textures.bag;
        _this.swordTexture = textures.sword;
        _this.shieldTexture = textures.shield;
        _this.heartTexture = textures.heart;
        _this.pickaxeTexture = textures.pickaxe;
        _this.potionTexture = textures.potion;
        _this.emptyHandTexture = textures.emptyHand;
        _this.animation.animationSpeed = 0.05;
        _this.animation.onComplete = function () {
            _this.endAnimation();
        };
        return _this;
    }
    UpgradeAnimation.loadTextures = function (color, actionName, nDownFrames, nSideFrames, nUpFrames) {
        var restFrame = PIXI.Texture.fromFrame("walk_down_" + color + "_1.png").clone();
        var bagTexture = [restFrame];
        var swordTexture = [restFrame];
        var shieldTexture = [restFrame];
        var heartTexture = [restFrame];
        var pickaxeTexture = [restFrame];
        var potionTexture = [restFrame];
        var emptyHandTexture = [restFrame];
        for (var i = 1; i <= NUMBER_FRAMES; i++) {
            bagTexture.push(PIXI.Texture.fromFrame(actionName + "_bag_" + color + "_" + i + ".png").clone());
            swordTexture.push(PIXI.Texture.fromFrame(actionName + "_sword_" + color + "_" + i + ".png").clone());
            shieldTexture.push(PIXI.Texture.fromFrame(actionName + "_shield_" + color + "_" + i + ".png").clone());
            heartTexture.push(PIXI.Texture.fromFrame(actionName + "_heart_" + color + "_" + i + ".png").clone());
            pickaxeTexture.push(PIXI.Texture.fromFrame(actionName + "_pickaxe_" + color + "_" + i + ".png").clone());
            potionTexture.push(PIXI.Texture.fromFrame(actionName + "_potion_" + color + "_" + i + ".png").clone());
            emptyHandTexture.push(PIXI.Texture.fromFrame(actionName + "_empty_" + color + "_" + i + ".png").clone());
        }
        return {
            bag: bagTexture,
            sword: swordTexture,
            shield: shieldTexture,
            heart: heartTexture,
            pickaxe: pickaxeTexture,
            potion: potionTexture,
            emptyHand: emptyHandTexture
        };
    };
    UpgradeAnimation.prototype.setUpgradeType = function (upgradeType, hasItem) {
        switch (upgradeType) {
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].AttackPower:
                this.animation.textures = hasItem ? this.swordTexture : this.emptyHandTexture;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].CarryingCapacity:
                this.animation.textures = hasItem ? this.backpackTexture : this.emptyHandTexture;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].CollectingSpeed:
                this.animation.textures = hasItem ? this.pickaxeTexture : this.emptyHandTexture;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].Defence:
                this.animation.textures = hasItem ? this.shieldTexture : this.emptyHandTexture;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].MaximumHealth:
                this.animation.textures = this.heartTexture;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__classes_items__["c" /* UpgradeType */].Potion:
                this.animation.textures = this.potionTexture;
                break;
            default:
                return;
        }
    };
    UpgradeAnimation.prototype.updateTexture = function (newBaseTexture) { };
    UpgradeAnimation.prototype.setDirection = function (direction) { };
    return UpgradeAnimation;
}(__WEBPACK_IMPORTED_MODULE_1__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/animation/walkAnimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("./node_modules/pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__ = __webpack_require__("./src/app/shared/animation/animationDirection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerAnimation__ = __webpack_require__("./src/app/game/animation/playerAnimation.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FRAME_RATE = 60;
var NUMBER_DOWN_FRAMES = 11;
var NUMBER_SIDE_FRAMES = 11;
var NUMBER_UP_FRAMES = 11;
var WalkAnimation = /** @class */ (function (_super) {
    __extends(WalkAnimation, _super);
    function WalkAnimation(username, position, gridDimension, color) {
        var _this = this;
        var textures = __WEBPACK_IMPORTED_MODULE_2__playerAnimation__["a" /* PlayerAnimation */].loadTextures(color, 'walk', NUMBER_DOWN_FRAMES, NUMBER_SIDE_FRAMES, NUMBER_UP_FRAMES);
        _this = _super.call(this, textures.up, textures.down, textures.side, username, position, gridDimension) || this;
        _this.actionName = 'walk';
        _this.animation.loop = true;
        _this.gridDimension = gridDimension;
        return _this;
    }
    WalkAnimation.prototype.translateAnimation = function () {
        var translationPerFrameWidth = this.gridDimension.x / FRAME_RATE;
        var translationPerFrameHeight = this.gridDimension.y / FRAME_RATE;
        var canStop = false;
        switch (this.currentDirection) {
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].UP:
                this.y -= translationPerFrameHeight;
                canStop = this.y <= this.destinationPoint.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN:
                this.y += translationPerFrameHeight;
                canStop = this.y >= this.destinationPoint.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT:
                this.x -= translationPerFrameWidth;
                canStop = this.x <= this.destinationPoint.x;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT:
                this.x += translationPerFrameWidth;
                canStop = this.x >= this.destinationPoint.x;
                break;
            default:
                this.endAnimation();
                return;
        }
        if (canStop) {
            this.endAnimation();
        }
    };
    WalkAnimation.prototype.execute = function (direction) {
        this.setDirection(direction);
        this.destinationPoint = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Point"](this.x, this.y);
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].UP:
                this.destinationPoint.y -= this.gridDimension.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN:
                this.destinationPoint.y += this.gridDimension.y;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].LEFT:
                this.destinationPoint.x -= this.gridDimension.x;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].RIGHT:
                this.destinationPoint.x += this.gridDimension.x;
                break;
            default:
                return;
        }
        __WEBPACK_IMPORTED_MODULE_0_pixi_js__["ticker"].shared.add(this.translateAnimation, this);
        this.animation.play();
    };
    WalkAnimation.prototype.endAnimation = function () {
        __WEBPACK_IMPORTED_MODULE_0_pixi_js__["ticker"].shared.remove(this.translateAnimation, this);
        _super.prototype.endAnimation.call(this);
    };
    WalkAnimation.prototype.update = function (newPosition, gridDimension) {
        _super.prototype.update.call(this, newPosition, gridDimension);
        this.gridDimension = gridDimension;
    };
    WalkAnimation.prototype.reset = function () {
        this.setDirection(__WEBPACK_IMPORTED_MODULE_1__shared_animation_animationDirection__["a" /* AnimationDirection */].DOWN);
    };
    return WalkAnimation;
}(__WEBPACK_IMPORTED_MODULE_2__playerAnimation__["a" /* PlayerAnimation */]));



/***/ }),

/***/ "./src/app/game/game.component.css":
/***/ (function(module, exports) {

module.exports = "#gameView {\r\n    --button-height: 40px;\r\n    overflow: hidden;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.over {\r\n    position: absolute;\r\n}\r\n\r\n.arrow-up {\r\n    top: 0px;\r\n    left: calc(50% - var(--button-height) / 2);\r\n    position: absolute;\r\n}\r\n\r\n.arrow-down {\r\n    top: calc(100% - var(--button-height));\r\n    left: calc(50% - var(--button-height) / 2);\r\n    position: absolute;\r\n}\r\n\r\n.arrow-left {\r\n    top: calc(50% - var(--button-height) / 2);\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n\r\n.arrow-right {\r\n    top: calc(50% - var(--button-height) / 2);\r\n    left: calc(100% - var(--button-height));\r\n    position: absolute;\r\n}\r\n\r\n.button-plus-minus {\r\n    top: calc(100% - 2 * var(--button-height));\r\n    left: calc(100% - var(--button-height));\r\n    position: absolute;\r\n}\r\n\r\nbutton {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div #gameView id=\"gameView\"></div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_scene__ = __webpack_require__("./src/app/classes/scene.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__("./src/app/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_spritesheetColor__ = __webpack_require__("./src/app/classes/spritesheetColor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VIEW_TRANSLATION = 4;
var VIEW_ZOOM = 4;
var LEFT_KEYCODE = 37; // Left arrow
var UP_KEYCODE = 38; // Up arrow
var RIGHT_KEYCODE = 39; // Right arrow
var DOWN_KEYCODE = 40; // Down arrow
var ZOOM_IN_KEYCODE = 65; // a
var ZOOM_OUT_KEYCODE = 83; // s
var GameComponent = /** @class */ (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.sceneReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isGameSceneReady = false;
        this.forceSync = false;
    }
    GameComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.gameService.getSpritesheets().subscribe(function (spritesheetsData) {
                    if (!_this.scene) {
                        var spritesheets = _this.parseSpritesheet(spritesheetsData.spritesheets);
                        _this.initScene(spritesheets);
                    }
                    else {
                        // update spritesheet and player concerned i guess?
                    }
                });
                this.gameService.getMapInfo().subscribe(function (mapData) {
                    _this.lastSyncTimestamp = mapData.timestamp;
                    if (_this.isGameSceneReady) {
                        _this.resyncScene(mapData);
                    }
                });
                this.gameService.getTurn().subscribe(function (turn) {
                    if (_this.isGameSceneReady && turn.timestamp > _this.lastSyncTimestamp) {
                        _this.scene.playAnimations(turn.actions);
                        _this.scene.respawnDeadPlayers(turn.deadPlayers);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    GameComponent.prototype.initScene = function (spritesheets) {
        var _this = this;
        if (this.sceneSize) {
            this.scene = new __WEBPACK_IMPORTED_MODULE_1__classes_scene__["a" /* Scene */](spritesheets, this.sceneSize);
            this.scene.sceneLoaded.subscribe(function (_) {
                _this.gameService.requestNewView(_this.scene.getMapInfo(), _this.scene.getMapCentralPosition());
                _this.forceSync = true;
                _this.isGameSceneReady = true;
                setTimeout(function () {
                    _this.sceneReady.emit();
                }, 10);
            });
            this.gameViewRef.nativeElement.appendChild(this.scene.view);
        }
        else {
            setTimeout(function (_) { return _this.initScene(spritesheets); }, 100);
        }
    };
    GameComponent.prototype.onResize = function (width, height) {
        this.sceneSize = new PIXI.Point(width, height);
        // TODO: limit number of resize requests, could overwhelm the server.
        // (Wait until window is done resizing?)
        if (this.scene) {
            this.scene.onResize(this.sceneSize);
            // Hack to refresh view.
            var newPosition = this.scene.getMapCentralPosition();
            var newViewSize = this.scene.getMapInfo();
            this.gameService.requestNewView(newViewSize, newPosition);
            this.forceSync = true;
        }
    };
    GameComponent.prototype.moveView = function (direction) {
        if (!this.scene) {
            return;
        }
        var newPosition = this.scene.getMapCentralPosition();
        switch (direction) {
            case 'up':
                newPosition.y -= VIEW_TRANSLATION;
                break;
            case 'down':
                newPosition.y += VIEW_TRANSLATION;
                break;
            case 'left':
                newPosition.x -= VIEW_TRANSLATION;
                break;
            case 'right':
                newPosition.x += VIEW_TRANSLATION;
                break;
            default:
                break;
        }
        var newViewSize = this.scene.getMapInfo();
        this.gameService.requestNewView(newViewSize, newPosition);
    };
    GameComponent.prototype.zoom = function (direction) {
        var newPosition = this.scene.getMapCentralPosition();
        var newViewSize = this.scene.getMapInfo().clone();
        if (direction === 'out') {
            newViewSize.height += VIEW_ZOOM;
            newViewSize.width += VIEW_ZOOM;
        }
        else {
            newViewSize.height -= VIEW_ZOOM;
            newViewSize.width -= VIEW_ZOOM;
        }
        this.gameService.requestNewView(newViewSize, newPosition);
    };
    GameComponent.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case LEFT_KEYCODE:
                this.moveView('left');
                break;
            case UP_KEYCODE:
                this.moveView('up');
                break;
            case RIGHT_KEYCODE:
                this.moveView('right');
                break;
            case DOWN_KEYCODE:
                this.moveView('down');
                break;
            case ZOOM_IN_KEYCODE:
                this.zoom('in');
                break;
            case ZOOM_OUT_KEYCODE:
                this.zoom('out');
                break;
        }
    };
    GameComponent.prototype.resyncScene = function (syncMessage) {
        var map = syncMessage.map;
        var centralPositionChanged = this.scene.setMapCentralPosition(syncMessage.position);
        var mapChanged = this.scene.updateMap(map);
        if (this.forceSync || centralPositionChanged || mapChanged) {
            this.scene.updatePlayers(syncMessage.players, syncMessage.totalMapSize);
            this.forceSync = false;
        }
    };
    GameComponent.prototype.parseSpritesheet = function (playerSpritesheet) {
        var parsedSpriteSheet = [];
        for (var playerGuid in playerSpritesheet) {
            if (playerSpritesheet[playerGuid] !== undefined) {
                var colorNumber = parseInt(playerSpritesheet[playerGuid], 10);
                parsedSpriteSheet[playerGuid] = __WEBPACK_IMPORTED_MODULE_3__classes_spritesheetColor__["a" /* SpriteSheetColor */][colorNumber];
            }
        }
        return parsedSpriteSheet;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GameComponent.prototype, "sceneReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('gameView'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GameComponent.prototype, "gameViewRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GameComponent.prototype, "onKeyDown", null);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/game/game.component.html"),
            styles: [__webpack_require__("./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_providers_web_socket_service__ = __webpack_require__("./src/app/shared/providers/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__ = __webpack_require__("./src/app/shared/messages/messageType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_messages_updateViewMessage__ = __webpack_require__("./src/app/shared/messages/updateViewMessage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameService = /** @class */ (function () {
    function GameService(webSocketService) {
        this.webSocketService = webSocketService;
        this.spritesheetData$ = this.webSocketService.message$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (message) {
            return message.type === __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__["a" /* MessageType */].Spritesheet;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (message) {
            return message;
        }));
        this.mapData$ = this.webSocketService.message$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (message) {
            return message.type === __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__["a" /* MessageType */].Sync;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (message) {
            return message;
        }));
        this.gameTurn$ = this.webSocketService.message$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (message) {
            return message.type === __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__["a" /* MessageType */].Turn;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (message) {
            return message;
        }));
    }
    GameService.prototype.getSpritesheets = function () {
        return this.spritesheetData$;
    };
    GameService.prototype.getMapInfo = function () {
        return this.mapData$;
    };
    GameService.prototype.getTurn = function () {
        return this.gameTurn$;
    };
    GameService.prototype.requestNewView = function (mapSize, position) {
        this.webSocketService.send(new __WEBPACK_IMPORTED_MODULE_4__shared_messages_updateViewMessage__["a" /* UpdateViewMessage */](mapSize, position));
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_providers_web_socket_service__["a" /* WebSocketService */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n            box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: #eeeeee;\r\n}\r\n\r\n.mat-card {\r\n    margin: 10px;\r\n    background: #eeeeee;\r\n}\r\n\r\n.mat-card:hover {\r\n    background-color: white;\r\n}\r\n\r\n.button-follow {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n}"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor='let player of this.leaderboardService.getPlayersInfo() | async'>\r\n    <div>\r\n        <button mat-icon-button class=\"button-follow\" (click)=\"followPlayer(player)\">\r\n            <mat-icon *ngIf=\"bindedId !== player.playerId\" class=\"green-icon\">gps_not_fixed</mat-icon>\r\n            <mat-icon *ngIf=\"bindedId === player.playerId\" class=\"green-icon\">gps_fixed</mat-icon>\r\n        </button>\r\n    </div>\r\n    <mat-card-content>\r\n        <h2>{{ player.name }} - {{ player.currentHealth }}/{{ player.maximumHealth }} HP</h2>\r\n        <h3>Score: {{ player.score }}</h3>\r\n        <h3>{{ player.killCount }} kills - {{ player.deathCount }} deaths</h3>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaderboard_service__ = __webpack_require__("./src/app/leaderboard/leaderboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GODMODE_KEY = 71; // g
var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(leaderboardService) {
        var _this = this;
        this.leaderboardService = leaderboardService;
        this.isGodMode = false;
        this.currentIndex = 0;
        this.leaderboardService.getPlayersInfo()
            .subscribe(function (info) {
            _this.players = info;
        });
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.switchPlayer(); }, 15000);
    };
    LeaderboardComponent.prototype.followPlayer = function (player) {
        if (this.bindedId && player.playerId === this.bindedId) {
            this.unFollowPlayer();
        }
        else {
            this.bindedId = player.playerId;
            this.leaderboardService.bindToPlayer(this.bindedId);
        }
        this.isGodMode = false;
    };
    LeaderboardComponent.prototype.unFollowPlayer = function () {
        this.bindedId = undefined;
        this.leaderboardService.unbindToPlayer();
    };
    LeaderboardComponent.prototype.switchPlayer = function () {
        if (this.isGodMode && this.players) {
            this.currentIndex = Math.floor(Math.random() * this.players.length);
            var player = this.players[this.currentIndex];
            this.bindedId = player.playerId;
            this.leaderboardService.bindToPlayer(this.bindedId);
            this.currentIndex %= this.players.length;
        }
    };
    LeaderboardComponent.prototype.onKeyDown = function (event) {
        if (event.keyCode === GODMODE_KEY) {
            this.isGodMode = !this.isGodMode;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], LeaderboardComponent.prototype, "onKeyDown", null);
    LeaderboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-leaderboard',
            template: __webpack_require__("./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__("./src/app/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__leaderboard_service__["a" /* LeaderboardService */]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_providers_web_socket_service__ = __webpack_require__("./src/app/shared/providers/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__ = __webpack_require__("./src/app/shared/messages/messageType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_messages_bindPlayerMessage__ = __webpack_require__("./src/app/shared/messages/bindPlayerMessage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderboardService = /** @class */ (function () {
    function LeaderboardService(webSocketService) {
        this.webSocketService = webSocketService;
        this.leaderboardData$ = this.webSocketService.message$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (message) {
            return message.type === __WEBPACK_IMPORTED_MODULE_3__shared_messages_messageType__["a" /* MessageType */].Leaderboard;
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (message) {
            return message.leaderboard;
        }));
    }
    LeaderboardService.prototype.getPlayersInfo = function () {
        return this.leaderboardData$;
    };
    LeaderboardService.prototype.bindToPlayer = function (playerId) {
        this.webSocketService.send(new __WEBPACK_IMPORTED_MODULE_4__shared_messages_bindPlayerMessage__["a" /* BindPlayerMessage */](playerId));
    };
    LeaderboardService.prototype.unbindToPlayer = function () {
        this.webSocketService.send(new __WEBPACK_IMPORTED_MODULE_4__shared_messages_bindPlayerMessage__["a" /* BindPlayerMessage */](''));
    };
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_providers_web_socket_service__["a" /* WebSocketService */]])
    ], LeaderboardService);
    return LeaderboardService;
}());



/***/ }),

/***/ "./src/app/shared/animation/animationDirection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationDirection; });
var AnimationDirection;
(function (AnimationDirection) {
    AnimationDirection[AnimationDirection["UP"] = 0] = "UP";
    AnimationDirection[AnimationDirection["DOWN"] = 1] = "DOWN";
    AnimationDirection[AnimationDirection["LEFT"] = 2] = "LEFT";
    AnimationDirection[AnimationDirection["RIGHT"] = 3] = "RIGHT";
})(AnimationDirection || (AnimationDirection = {}));


/***/ }),

/***/ "./src/app/shared/animation/usernameProperties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameProperties; });
var UsernameProperties = /** @class */ (function () {
    function UsernameProperties() {
    }
    UsernameProperties.xOffset = function (usernameWidth) {
        return usernameWidth / 4;
    };
    UsernameProperties.STYLE = { fontFamily: 'Arial', fontSize: '1.2em', align: 'center', fill: 'white' };
    UsernameProperties.Y_OFFSET = 5;
    return UsernameProperties;
}());



/***/ }),

/***/ "./src/app/shared/messages/bindPlayerMessage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindPlayerMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messageType__ = __webpack_require__("./src/app/shared/messages/messageType.ts");

var BindPlayerMessage = /** @class */ (function () {
    function BindPlayerMessage(playerId) {
        this.playerId = playerId;
        this.type = __WEBPACK_IMPORTED_MODULE_0__messageType__["a" /* MessageType */].Bind;
        this.timestamp = new Date();
    }
    return BindPlayerMessage;
}());



/***/ }),

/***/ "./src/app/shared/messages/messageType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Sync"] = 0] = "Sync";
    MessageType[MessageType["Spritesheet"] = 1] = "Spritesheet";
    MessageType[MessageType["PlayerInfo"] = 2] = "PlayerInfo";
    MessageType[MessageType["Leaderboard"] = 3] = "Leaderboard";
    MessageType[MessageType["Turn"] = 4] = "Turn";
    MessageType[MessageType["Achievement"] = 5] = "Achievement";
    MessageType[MessageType["Update"] = 6] = "Update";
    MessageType[MessageType["Bind"] = 7] = "Bind";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ "./src/app/shared/messages/updateViewMessage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateViewMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messageType__ = __webpack_require__("./src/app/shared/messages/messageType.ts");

var UpdateViewMessage = /** @class */ (function () {
    function UpdateViewMessage(viewSize, location) {
        this.type = __WEBPACK_IMPORTED_MODULE_0__messageType__["a" /* MessageType */].Update;
        this.position = location;
        this.viewSize = { x: viewSize.width, y: viewSize.height };
        this.timestamp = new Date();
    }
    return UpdateViewMessage;
}());



/***/ }),

/***/ "./src/app/shared/providers/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        var _this = this;
        this.socket = new WebSocket("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].WS_URL);
        this.message$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.socket.onmessage = function (message) {
            var messageData = JSON.parse(message.data);
            _this.message$.next(messageData);
        };
    }
    WebSocketService.prototype.send = function (message) {
        this.socket.send(JSON.stringify(message));
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_web_socket_service__ = __webpack_require__("./src/app/shared/providers/web-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__providers_web_socket_service__["a" /* WebSocketService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    WS_URL: 'ws://localhost:4000/game'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map