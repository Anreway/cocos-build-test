System.register("chunks:///_virtual/BalanceLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "294ccDOwCJCJos+ct2yd930", "BalanceLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BalanceLabel = exports('BalanceLabel', (_dec = ccclass('BalanceLabel'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BalanceLabel, _Component);
        function BalanceLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BalanceLabel.prototype;
        _proto.start = function start() {
          this.initWithUserData();
        };
        _proto.initWithUserData = /*#__PURE__*/function () {
          var _initWithUserData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  UserDataManager.eventTarget.on('userDataUpdated', this.updateMe, this);
                  if (this.myLabel) {
                    this.myLabel.string = UserDataManager.instance.getUserBalance().toFixed(2);
                  }
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initWithUserData() {
            return _initWithUserData.apply(this, arguments);
          }
          return initWithUserData;
        }();
        _proto.updateMe = function updateMe() {
          if (this.myLabel) {
            this.myLabel.string = UserDataManager.instance.getUserBalance().toFixed(2);
          }
        };
        return BalanceLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoostItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadingHider.ts', './BoostsController.ts', './BoostType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, RichText, Color, Node, Sprite, Component, LoadingHider, BoostsController, BoostType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      RichText = module.RichText;
      Color = module.Color;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      LoadingHider = module.LoadingHider;
    }, function (module) {
      BoostsController = module.BoostsController;
    }, function (module) {
      BoostType = module.BoostType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "83147OQPDdCyZw6uDaBIgJl", "BoostItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BoostItem = exports('BoostItem', (_dec = ccclass('BoostItem'), _dec2 = property(BoostsController), _dec3 = property({
        type: Enum(BoostType)
      }), _dec4 = property(Label), _dec5 = property(RichText), _dec6 = property(Color), _dec7 = property(Color), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Color), _dec11 = property(Color), _dec12 = property(LoadingHider), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoostItem, _Component);
        function BoostItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "boostController", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "myBoostType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPrefix", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valuesRichText", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valuesPostfix", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentValueTextColor", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextValueTextColor", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "priceLabel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pricePrefix", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pricePostfix", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buyButtonNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "activeButtonColor", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "unactiveButtonColor", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loader", _descriptor15, _assertThisInitialized(_this));
          _this.isButtonActive = false;
          return _this;
        }
        var _proto = BoostItem.prototype;
        _proto.onLoad = function onLoad() {
          if (this.loader) {
            this.loader.show();
          }
          if (this.buyButtonNode) {
            this.buyButtonNode.on(Node.EventType.TOUCH_END, this.buyButtonPressed, this);
          }
        };
        _proto.colorToHex = function colorToHex(color) {
          var r = this.componentToHex(color.r);
          var g = this.componentToHex(color.g);
          var b = this.componentToHex(color.b);
          return "" + r + g + b;
        };
        _proto.componentToHex = function componentToHex(c) {
          var hex = c.toString(16);
          return hex.length == 1 ? '0' + hex : hex;
        };
        _proto.updateMe = function updateMe(level, currentValue, nextValue, priceForNext) {
          this.levelLabel.string = this.levelPrefix + level.toString();
          var currentColorHex = this.colorToHex(this.currentValueTextColor);
          var nextColorHex = this.colorToHex(this.nextValueTextColor);
          this.valuesRichText.string = "<color=#" + currentColorHex + ">" + currentValue + this.valuesPostfix + " > </color><color=#" + nextColorHex + ">" + nextValue + this.valuesPostfix + "</color>";
          this.priceLabel.string = this.pricePrefix + priceForNext.toString() + this.pricePostfix;
          this.buyButtonActivity(true);
          if (this.loader) {
            this.loader.hide();
          }
        };
        _proto.updateMeLikeFull = function updateMeLikeFull(level, currentValue) {
          this.levelLabel.string = this.levelPrefix + level.toString();
          var currentColorHex = this.colorToHex(this.currentValueTextColor);
          this.valuesRichText.string = "<color=#" + currentColorHex + ">" + currentValue + this.valuesPostfix + "</color>";
          this.priceLabel.string = "Maximum boost!";
          this.buyButtonActivity(false);
          if (this.loader) {
            this.loader.hide();
          }
        };
        _proto.buyButtonActivity = function buyButtonActivity(actvivty) {
          if (this.buyButtonNode) {
            if (actvivty) {
              this.buyButtonNode.getComponent(Sprite).color = this.activeButtonColor;
              this.isButtonActive = true;
            } else {
              this.buyButtonNode.getComponent(Sprite).color = this.unactiveButtonColor;
              this.isButtonActive = false;
            }
          }
        };
        _proto.buyButtonPressed = function buyButtonPressed() {
          if (this.isButtonActive) {
            this.buyButtonActivity(false);
            this.boostController.buyBoostByBoostType(this.myBoostType);
          }
        };
        _proto.tryingPurchase = function tryingPurchase() {
          if (this.loader) {
            this.loader.show();
          }
        };
        _proto.purchaseSuccessful = function purchaseSuccessful() {
          console.log("PURCHASE SUCC!!");
          //make some grafics?
        };

        _proto.purchaseUnsuccessful = function purchaseUnsuccessful() {
          console.log("PURCHASE FAILED!!");
          //make some grafics?
        };

        return BoostItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boostController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myBoostType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BoostType.Duration;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelPrefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Level ";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "valuesRichText", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "valuesPostfix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "h";
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentValueTextColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nextValueTextColor", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "pricePrefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Price: ";
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pricePostfix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return " $SEM";
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "buyButtonNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "activeButtonColor", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "unactiveButtonColor", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "loader", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoostsController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts', './BoostItem.ts', './BoostType.ts', './ServerCommunicator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, UserDataManager, BoostItem, BoostType, ServerCommunicator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      BoostItem = module.BoostItem;
    }, function (module) {
      BoostType = module.BoostType;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e4d8d0yweNG0IMdCeUWaI3W", "BoostsController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BoostsController = exports('BoostsController', (_dec = ccclass('BoostsController'), _dec2 = property(BoostItem), _dec3 = property(BoostItem), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoostsController, _Component);
        function BoostsController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "durationBoost", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "speedBoost", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BoostsController.prototype;
        _proto.start = function start() {
          this.loadDataFromUserData();
          UserDataManager.eventTarget.on('userDataUpdated', this.loadDataFromUserData, this);
        };
        _proto.loadDataFromUserData = /*#__PURE__*/function () {
          var _loadDataFromUserData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  this.setDurationBoostInfo();
                  this.setSpeedBoostInfo();
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadDataFromUserData() {
            return _loadDataFromUserData.apply(this, arguments);
          }
          return loadDataFromUserData;
        }();
        _proto.setSpeedBoostInfo = function setSpeedBoostInfo() {
          var curMiningSpeedId = UserDataManager.instance.getUserSpeedId();
          var curMiningSpeed = UserDataManager.instance.getUserCurrentSpeed();
          var nextMiningSpeedId = curMiningSpeedId + 1;
          if (nextMiningSpeedId > UserDataManager.instance.getSpeedInfosCount()) {
            console.log("NO MORE MINING SPEEDS!");
            this.speedBoost.updateMeLikeFull(curMiningSpeedId, curMiningSpeed);
            return;
          }
          var nextMiningSpeed = UserDataManager.instance.getMiningSpeedById(nextMiningSpeedId);
          var nextMiningSpeedPrice = UserDataManager.instance.getSpeedPriceById(nextMiningSpeedId);
          this.speedBoost.updateMe(curMiningSpeedId, curMiningSpeed, nextMiningSpeed, nextMiningSpeedPrice);
        };
        _proto.setDurationBoostInfo = function setDurationBoostInfo() {
          var curMiningDurationId = UserDataManager.instance.getUserDurationId();
          var curMiningDuration = UserDataManager.instance.getUserCurrentDuration();
          var nextMiningDurationId = curMiningDurationId + 1;
          if (nextMiningDurationId > UserDataManager.instance.getDurationInfosCount()) {
            console.log("NO MORE MINING DURATIONS!");
            this.durationBoost.updateMeLikeFull(curMiningDurationId, curMiningDuration);
            return;
          }
          var nextMiningDuration = UserDataManager.instance.getMiningDurationById(nextMiningDurationId);
          var nextMiningDurationPrice = UserDataManager.instance.getDurationPriceById(nextMiningDurationId);
          this.durationBoost.updateMe(curMiningDurationId, curMiningDuration, nextMiningDuration, nextMiningDurationPrice);
        };
        _proto.buyBoostByBoostType = function buyBoostByBoostType(boostType) {
          if (boostType == BoostType.Duration) {
            this.tryBuyNextDuration();
          }
          if (boostType == BoostType.Speed) {
            this.tryBuyNextSpeed();
          }
        };
        _proto.tryBuyNextDuration = /*#__PURE__*/function () {
          var _tryBuyNextDuration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var userId, response, succBuy;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context2.next = 5;
                    break;
                  }
                  _context2.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context2.next = 0;
                  break;
                case 5:
                  this.durationBoost.tryingPurchase();
                  userId = UserDataManager.instance.getUserId();
                  _context2.next = 9;
                  return ServerCommunicator.instance.sendGetRequest('boost_duration?user_id=' + userId);
                case 9:
                  response = _context2.sent;
                  succBuy = response[0];
                  if (succBuy == true) {
                    this.durationBoost.purchaseSuccessful();
                  } else {
                    this.durationBoost.purchaseUnsuccessful();
                  }
                  UserDataManager.instance.forceUpdateUserInfo();
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function tryBuyNextDuration() {
            return _tryBuyNextDuration.apply(this, arguments);
          }
          return tryBuyNextDuration;
        }();
        _proto.tryBuyNextSpeed = /*#__PURE__*/function () {
          var _tryBuyNextSpeed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var userId, response, succBuy;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context3.next = 5;
                    break;
                  }
                  _context3.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context3.next = 0;
                  break;
                case 5:
                  this.speedBoost.tryingPurchase();
                  userId = UserDataManager.instance.getUserId();
                  _context3.next = 9;
                  return ServerCommunicator.instance.sendGetRequest('boost_speed?user_id=' + userId);
                case 9:
                  response = _context3.sent;
                  succBuy = response[0];
                  if (succBuy == true) {
                    this.speedBoost.purchaseSuccessful();
                  } else {
                    this.speedBoost.purchaseUnsuccessful();
                  }
                  UserDataManager.instance.forceUpdateUserInfo();
                case 13:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function tryBuyNextSpeed() {
            return _tryBuyNextSpeed.apply(this, arguments);
          }
          return tryBuyNextSpeed;
        }();
        return BoostsController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "durationBoost", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speedBoost", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoostType.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50d5eBKex5ATK2PHZzeoUuO", "BoostType", undefined);
      var BoostType = exports('BoostType', /*#__PURE__*/function (BoostType) {
        BoostType[BoostType["Duration"] = 0] = "Duration";
        BoostType[BoostType["Speed"] = 1] = "Speed";
        return BoostType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonFeedbacks.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, Node, tween, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "90d4ckbniJCCayv4Wlpw/dh", "ButtonFeedbacks", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonFeedbacks = exports('ButtonFeedbacks', (_dec = ccclass('ButtonFeedbacks'), _dec2 = property({
        type: CCFloat,
        tooltip: "Hover reduction time (in seconds)"
      }), _dec3 = property({
        tooltip: "How many times to reduce when hovering"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "Time to decrease when pressed (in seconds)"
      }), _dec5 = property({
        tooltip: "How many times to reduce when pressed"
      }), _dec6 = property({
        tooltip: "How much to increase after clicking"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonFeedbacks, _Component);
        function ButtonFeedbacks() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "useHoverTween", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useClickTween", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hoverScale", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickDuration", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScale", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickScaleUp", _descriptor7, _assertThisInitialized(_this));
          _this.originalScale = new Vec3();
          return _this;
        }
        var _proto = ButtonFeedbacks.prototype;
        _proto.start = function start() {
          this.originalScale.set(this.node.scale);
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onMouseEnter = function onMouseEnter() {
          if (!this.useHoverTween) return;
          tween(this.node).to(this.hoverDuration, {
            scale: this.hoverScale
          }).start();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (!this.useHoverTween) return;
          tween(this.node).to(this.hoverDuration, {
            scale: this.originalScale
          }).start();
        };
        _proto.onClick = function onClick() {
          if (!this.useClickTween) return;
          tween(this.node).to(this.clickDuration, {
            scale: this.clickScale
          }).to(this.clickDuration / 2, {
            scale: this.clickScaleUp
          }).to(this.clickDuration, {
            scale: this.originalScale
          }).start();
        };
        return ButtonFeedbacks;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useHoverTween", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "useClickTween", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hoverDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hoverScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.95, 0.95, 0.95);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clickScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0.9, 0.9, 0.9);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "clickScaleUp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1.1, 1.1, 1.1);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CopyInviteLink.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, native, Node, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      native = module.native;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a8b26xTwgZDvoZJ4iBk2gKa", "CopyInviteLink", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var copyTextToClipboard = native.copyTextToClipboard;
      var CopyInviteLink = exports('CopyInviteLink', (_dec = ccclass('CopyInviteLink'), _dec2 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CopyInviteLink, _Component);
        function CopyInviteLink() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "baseLinkToShare", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CopyInviteLink.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onClick = /*#__PURE__*/function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user, urlForCopy;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  urlForCopy = this.baseLinkToShare + user.id.toString();
                  _context.prev = 5;
                  _context.next = 8;
                  return navigator.clipboard.writeText(urlForCopy);
                case 8:
                  _context.next = 13;
                  break;
                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](5);
                  console.error('Cant copy text with: ', _context.t0);
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[5, 10]]);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        return CopyInviteLink;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseLinkToShare", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'https://t.me/hamsmining_bot/start?startapp=';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FriendItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "25199AKiYNHBZj7N6FH0cx9", "FriendItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FriendItem = exports('FriendItem', (_dec = ccclass('FriendItem'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FriendItem, _Component);
        function FriendItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "friendNameLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FriendItem.prototype;
        _proto.init = function init(friendName) {
          this.friendNameLabel.string = friendName;
        };
        return FriendItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "friendNameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FriendsScrollViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FriendItem.ts', './UserDataManager.ts', './ServerCommunicator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Component, FriendItem, UserDataManager, ServerCommunicator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      FriendItem = module.FriendItem;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a5f41y+2rdCbbTmgHQq3rA+", "FriendsScrollViewer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FriendsScrollViewer = exports('FriendsScrollViewer', (_dec = ccclass('FriendsScrollViewer'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FriendsScrollViewer, _Component);
        function FriendsScrollViewer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "friendItemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FriendsScrollViewer.prototype;
        _proto.start = function start() {
          this.init();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var userId, response, referralNames;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  userId = UserDataManager.instance.getUserId();
                  _context.prev = 6;
                  _context.next = 9;
                  return ServerCommunicator.instance.sendGetRequest('get_referrals_names?user_id=' + userId);
                case 9:
                  response = _context.sent;
                  referralNames = response;
                  if (Array.isArray(referralNames) && referralNames.every(function (name) {
                    return typeof name === 'string';
                  })) {
                    if (referralNames.length > 0) {
                      this.updateReferralList(referralNames);
                    } else {
                      this.showNoReferralsMessage();
                    }
                  } else {
                    console.error('ERROR IN GETTING FRIENDS FORMAT.');
                  }
                  _context.next = 17;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](6);
                  console.error('ERROR IN GETTING FRIENDS:', _context.t0);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[6, 14]]);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.updateReferralList = function updateReferralList(referralNames) {
          if (this.contentNode.children.length < referralNames.length) {
            if (this.contentNode.children.length > 0) {
              this.contentNode.removeAllChildren();
            }
          }
          if (this.friendItemPrefab && this.contentNode) {
            for (var i = 0; i < referralNames.length; i++) {
              var newFriendItemPrefab = instantiate(this.friendItemPrefab);
              this.contentNode.addChild(newFriendItemPrefab);
              newFriendItemPrefab.getComponent(FriendItem).init(referralNames[i]);
            }
          }
        };
        _proto.showNoReferralsMessage = function showNoReferralsMessage() {
          console.log('NO FRIENDS :C');
        };
        return FriendsScrollViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "friendItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingHider.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Mask, Sprite, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Mask = module.Mask;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b1f4eUqnYlAk7UbYrN3mV8t", "LoadingHider", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingHider = exports('LoadingHider', (_dec = ccclass('LoadingHider'), _dec2 = property(Node), _dec3 = property({
        type: Color
      }), _dec4 = property({
        type: Color
      }), _dec5 = property(Mask), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingHider, _Component);
        function LoadingHider() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDuration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disactivateOnHide", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shownColor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hidenColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskToUse", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoadingHider.prototype;
        _proto.show = function show() {
          if (this.myNode) {
            this.myNode.active = true;
            var sprite = this.myNode.getComponent(Sprite);
            if (!sprite) return;
            if (this.maskToUse) {
              this.maskToUse.enabled = true;
            }
            sprite.color = this.shownColor;
          }
        };
        _proto.hide = function hide() {
          var _this2 = this;
          if (this.myNode) {
            var sprite = this.myNode.getComponent(Sprite);
            if (!sprite) return;
            if (this.maskToUse) {
              this.maskToUse.enabled = false;
            }
            var initialColor = sprite.color.clone();
            var targetColor = this.hidenColor;
            tween(sprite).to(this.hideDuration, {
              color: targetColor
            }, {
              onUpdate: function onUpdate() {
                sprite.color = new Color(initialColor.r, initialColor.g, initialColor.b, sprite.color.a);
              }
            }).call(function () {
              if (_this2.disactivateOnHide) {
                _this2.myNode.active = false;
              }
            }).start();
          }
        };
        return LoadingHider;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "disactivateOnHide", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "shownColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hidenColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maskToUse", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './BalanceLabel.ts', './BoostItem.ts', './BoostType.ts', './BoostsController.ts', './ButtonFeedbacks.ts', './CopyInviteLink.ts', './FriendItem.ts', './FriendsScrollViewer.ts', './LoadingHider.ts', './MainMiningLabels.ts', './MiningCollectController.ts', './PopupManager.ts', './RotatableUITransform.ts', './ServerCommunicator.ts', './ShareInviteLink.ts', './SlidePopup.ts', './SuitcaseCounter.ts', './SuitcaseItemsController.ts', './SuitcasesDataManager.ts', './TaskItem.ts', './TasksDataManager.ts', './TasksScrollViewer.ts', './TestGetLabel.ts', './TimerLabel.ts', './UserDataManager.ts', './UserInfoDisplay.ts', './UsernameLabel.ts', './telegram-web.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainMiningLabels.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c0333NBcHZDeKGnxjD6X+Hw", "MainMiningLabels", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainMiningLabels = exports('MainMiningLabels', (_dec = ccclass('MainMiningLabels'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainMiningLabels, _Component);
        function MainMiningLabels() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "balanceLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balancePrefix", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentMinedLabel", _descriptor3, _assertThisInitialized(_this));
          _this.isMiningActive = false;
          _this.endDate = null;
          _this.timeDifference = 0;
          return _this;
        }
        var _proto = MainMiningLabels.prototype;
        _proto.start = function start() {
          this.updateBalanceLabel();
          UserDataManager.eventTarget.on('userDataUpdated', this.updateBalanceLabel, this);
        };
        _proto.update = function update(dt) {
          if (UserDataManager.instance.isInited) {
            this.updateCurrentMinedLabel();
          }
        };
        _proto.onDestroy = function onDestroy() {
          UserDataManager.eventTarget.off('userDataUpdated', this.updateBalanceLabel, this);
        };
        _proto.updateCurrentMinedLabel = function updateCurrentMinedLabel() {
          var startDateStr = UserDataManager.instance.getUserMiningStartDate();
          if (!startDateStr || startDateStr == "null") {
            this.currentMinedLabel.string = "00.00";
            return;
          }
          var startDate = new Date(startDateStr.replace(/-/g, "/"));
          if (!startDate) {
            this.currentMinedLabel.string = "00.00";
            return;
          }
          var DurationMs = UserDataManager.instance.getUserCurrentDuration() * 60 * 60 * 1000;
          this.timeDifference = UserDataManager.instance.getTimeDifference();
          if (!this.timeDifference) {
            console.error("can't get sync time from userDataManager");
            return;
          }
          this.endDate = new Date(startDate.getTime() + DurationMs);
          var currentTime = new Date(new Date().getTime() + this.timeDifference);
          var timeLeft = this.endDate.getTime() - currentTime.getTime();
          if (timeLeft <= 0) {
            this.currentMinedLabel.string = (UserDataManager.instance.getUserCurrentSpeed() * UserDataManager.instance.getUserCurrentDuration()).toFixed(4);
            this.isMiningActive = false;
          } else {
            var timePassedMs = currentTime.getTime() - startDate.getTime();
            var timePassedHours = timePassedMs / (1000 * 60 * 60);
            var minedAmount = timePassedHours * UserDataManager.instance.getUserCurrentSpeed();
            this.currentMinedLabel.string = minedAmount.toFixed(4);
            this.isMiningActive = true;
          }
        };
        _proto.updateBalanceLabel = /*#__PURE__*/function () {
          var _updateBalanceLabel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  this.balanceLabel.string = this.balancePrefix + UserDataManager.instance.getUserBalance().toFixed(2);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function updateBalanceLabel() {
            return _updateBalanceLabel.apply(this, arguments);
          }
          return updateBalanceLabel;
        }();
        return MainMiningLabels;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "balancePrefix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Balance ($SEM): ';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentMinedLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiningCollectController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimerLabel.ts', './UserDataManager.ts', './ServerCommunicator.ts', './ButtonFeedbacks.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Node, Color, Sprite, Component, TimerLabel, UserDataManager, ServerCommunicator, ButtonFeedbacks;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Color = module.Color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      TimerLabel = module.TimerLabel;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      ButtonFeedbacks = module.ButtonFeedbacks;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "08082H0P39LmrySN28jrFBO", "MiningCollectController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiningCollectController = exports('MiningCollectController', (_dec = ccclass('MiningCollectController'), _dec2 = property(TimerLabel), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property({
        type: Color
      }), _dec6 = property({
        type: Color
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiningCollectController, _Component);
        function MiningCollectController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "miningTimer", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningSpeedLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "collectMiningNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningSpeedPostfix", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyForCollectNodeColor", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notReadyForCollectNodeColor", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MiningCollectController.prototype;
        _proto.onDestroy = function onDestroy() {
          UserDataManager.eventTarget.off('userDataUpdated', this.updateMe, this);
        };
        _proto.start = function start() {
          UserDataManager.eventTarget.on('userDataUpdated', this.updateMe, this);
          this.init();
        };
        _proto.update = function update(dt) {
          if (UserDataManager.instance.isInited) {
            this.updateCollectNode();
          }
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var startDateStr, duration;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  if (this.miningSpeedLabel) {
                    this.miningSpeedLabel.string = UserDataManager.instance.getUserCurrentSpeed().toString() + this.miningSpeedPostfix;
                  }
                  if (this.miningTimer) {
                    startDateStr = UserDataManager.instance.getUserMiningStartDate();
                    if (startDateStr && startDateStr != "null") {
                      duration = UserDataManager.instance.getUserCurrentDuration();
                      this.miningTimer.init(startDateStr, duration);
                    }
                  }
                  if (this.collectMiningNode) {
                    this.collectMiningNode.on(Node.EventType.TOUCH_END, this.onClickCollectMiningNode, this);
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.onClickCollectMiningNode = function onClickCollectMiningNode() {
          if (!this.miningTimer.isTimerActive) {
            this.tryCollectMinedToServer();
          }
        };
        _proto.tryCollectMinedToServer = /*#__PURE__*/function () {
          var _tryCollectMinedToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var userId, response, isCollected;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  userId = UserDataManager.instance.getUserId();
                  _context2.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('collect_mining?user_id=' + userId);
                case 3:
                  response = _context2.sent;
                  isCollected = response;
                  if (isCollected) {
                    UserDataManager.instance.forceUpdateUserInfo();
                  } else {
                    console.log('cant collect mined sem!');
                  }
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function tryCollectMinedToServer() {
            return _tryCollectMinedToServer.apply(this, arguments);
          }
          return tryCollectMinedToServer;
        }();
        _proto.updateMe = /*#__PURE__*/function () {
          var _updateMe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var startDateStr, duration;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  console.log("TRYING UPDATE ME!");
                case 1:
                  if (UserDataManager.instance.isInited) {
                    _context3.next = 6;
                    break;
                  }
                  _context3.next = 4;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 4:
                  _context3.next = 1;
                  break;
                case 6:
                  if (this.miningSpeedLabel) {
                    this.miningSpeedLabel.string = UserDataManager.instance.getUserCurrentSpeed().toString() + this.miningSpeedPostfix;
                  }
                  if (this.miningTimer) {
                    startDateStr = UserDataManager.instance.getUserMiningStartDate();
                    if (startDateStr && startDateStr != "null") {
                      duration = UserDataManager.instance.getUserCurrentDuration();
                      this.miningTimer.init(startDateStr, duration);
                    }
                  }
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function updateMe() {
            return _updateMe.apply(this, arguments);
          }
          return updateMe;
        }();
        _proto.updateCollectNode = function updateCollectNode() {
          if (this.collectMiningNode) {
            if (this.miningTimer.isTimerActive) {
              this.collectMiningNode.getComponent(Sprite).color = this.notReadyForCollectNodeColor;
              this.collectMiningNode.getComponent(ButtonFeedbacks).useClickTween = false;
            } else {
              this.collectMiningNode.getComponent(Sprite).color = this.readyForCollectNodeColor;
              this.collectMiningNode.getComponent(ButtonFeedbacks).useClickTween = true;
            }
          }
        };
        return MiningCollectController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "miningTimer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "miningSpeedLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "collectMiningNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "miningSpeedPostfix", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ' sem/h';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "readyForCollectNodeColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notReadyForCollectNodeColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopupManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlidePopup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, Component, SlidePopup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SlidePopup = module.SlidePopup;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "56c44+jaTFNdKqXolyNCJjK", "PopupManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec2 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);
        function PopupManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popups", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopupManager.prototype;
        _proto.onLoad = function onLoad() {
          if (PopupManager.instance) {
            this.destroy();
            return;
          }
          PopupManager.instance = this;
          this.node.addComponent(UITransform);
        };
        PopupManager.getInstance = function getInstance() {
          return PopupManager.instance;
        };
        _proto.showPopup = function showPopup(index) {
          if (index < 0 || index >= this.popups.length) {
            console.warn('Popup index out of bounds');
            return;
          }
          var popupComponent = this.popups[index].getComponent(SlidePopup);
          if (popupComponent) {
            popupComponent.show();
          } else {
            console.warn('SlidePopup component not found on node:', this.popups[index].name);
          }
        };
        _proto.hidePopup = function hidePopup(index) {
          if (index < 0 || index >= this.popups.length) {
            console.warn('Popup index out of bounds');
            return;
          }
          var popupComponent = this.popups[index].getComponent(SlidePopup);
          if (popupComponent) {
            popupComponent.hide();
          } else {
            console.warn('SlidePopup component not found on node:', this.popups[index].name);
          }
        };
        _proto.switchPopup = function switchPopup(currentIndex, nextIndex) {
          this.hidePopup(currentIndex);
          this.showPopup(nextIndex);
        };
        return PopupManager;
      }(Component), _class3.instance = void 0, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "popups", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotatableUITransform.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, UITransform, Vec3, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "61c438tzKROxpZLE413yspT", "RotatableUITransform", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotationDirection = /*#__PURE__*/function (RotationDirection) {
        RotationDirection[RotationDirection["CLOCKWISE"] = 1] = "CLOCKWISE";
        RotationDirection[RotationDirection["COUNTERCLOCKWISE"] = -1] = "COUNTERCLOCKWISE";
        return RotationDirection;
      }(RotationDirection || {});
      var RotatableUITransform = exports('RotatableUITransform', (_dec = ccclass('RotateUITransform'), _dec2 = property({
        type: Enum(RotationDirection),
        tooltip: "Pick side for rotating"
      }), _dec3 = property({
        tooltip: "Speed of rotating"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotatableUITransform, _Component);
        function RotatableUITransform() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "direction", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotationSpeed", _descriptor2, _assertThisInitialized(_this));
          _this._uiTransform = null;
          return _this;
        }
        var _proto = RotatableUITransform.prototype;
        _proto.start = function start() {
          this._uiTransform = this.node.getComponent(UITransform);
        };
        _proto.update = function update(deltaTime) {
          if (this._uiTransform) {
            var angle = this.rotationSpeed * deltaTime * this.direction;
            var currentRotation = this.node.eulerAngles;
            var newRotation = new Vec3(currentRotation.x, currentRotation.y, currentRotation.z + angle);
            this.node.eulerAngles = newRotation;
          }
        };
        return RotatableUITransform;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RotationDirection.CLOCKWISE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotationSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ServerCommunicator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "accd3tgHFxBdLuM/Z0TKM6d", "ServerCommunicator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ServerCommunicator = exports('ServerCommunicator', (_dec = ccclass('ServerCommunicator'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ServerCommunicator, _Component);
        function ServerCommunicator() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ServerCommunicator.prototype;
        _proto.onLoad = function onLoad() {
          if (ServerCommunicator._instance) {
            console.warn("ServerCommunicator instance already exists!");
            this.destroy();
            return;
          }
          ServerCommunicator._instance = this;
        };
        _proto.sendGetRequest = /*#__PURE__*/function () {
          var _sendGetRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  url = "https://hmshtlser.online/" + endpoint;
                  _context.next = 3;
                  return fetch(url, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 3:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 6;
                    break;
                  }
                  throw new Error("HTTP error! status: " + response.status);
                case 6:
                  _context.next = 8;
                  return response.json();
                case 8:
                  return _context.abrupt("return", _context.sent);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function sendGetRequest(_x) {
            return _sendGetRequest.apply(this, arguments);
          }
          return sendGetRequest;
        }();
        _proto.sendPostRequest = /*#__PURE__*/function () {
          var _sendPostRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint) {
            var url, response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  url = "https://hmshtlser.online/" + endpoint;
                  _context2.next = 3;
                  return fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                case 3:
                  response = _context2.sent;
                  if (response.ok) {
                    _context2.next = 6;
                    break;
                  }
                  throw new Error("HTTP error! status: " + response.status);
                case 6:
                  _context2.next = 8;
                  return response.json();
                case 8:
                  return _context2.abrupt("return", _context2.sent);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function sendPostRequest(_x2) {
            return _sendPostRequest.apply(this, arguments);
          }
          return sendPostRequest;
        }();
        _createClass(ServerCommunicator, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("ServerCommunicator instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return ServerCommunicator;
      }(Component), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShareInviteLink.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9e4eduNVylGtrlb2HE465Qx", "ShareInviteLink", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShareInviteLink = exports('ShareInviteLink', (_dec = ccclass('ShareInviteLink'), _dec2 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShareInviteLink, _Component);
        function ShareInviteLink() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "baseLinkToShare", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ShareInviteLink.prototype;
        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        };
        _proto.onClick = /*#__PURE__*/function () {
          var _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user, urlForShare;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  urlForShare = this.baseLinkToShare + user.id.toString();
                  tgWebApp.share(urlForShare, 'Hi! \nJoin me in the Hamster Hotel Mining game! \nPack your bags and accumulate a $SEM token for your future hotel!');
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClick() {
            return _onClick.apply(this, arguments);
          }
          return onClick;
        }();
        return ShareInviteLink;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseLinkToShare", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'https://t.me/hamsmining_bot/start?startapp=';
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlidePopup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Vec3, UITransform, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "318c7GUdQxL9bAkeYE88t3a", "SlidePopup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupState = /*#__PURE__*/function (PopupState) {
        PopupState[PopupState["None"] = 0] = "None";
        PopupState[PopupState["Hidden"] = 1] = "Hidden";
        PopupState[PopupState["Showing"] = 2] = "Showing";
        PopupState[PopupState["Shown"] = 3] = "Shown";
        PopupState[PopupState["Hiding"] = 4] = "Hiding";
        return PopupState;
      }(PopupState || {});
      var SlideDirection = /*#__PURE__*/function (SlideDirection) {
        SlideDirection[SlideDirection["Left"] = 0] = "Left";
        SlideDirection[SlideDirection["Right"] = 1] = "Right";
        SlideDirection[SlideDirection["Top"] = 2] = "Top";
        SlideDirection[SlideDirection["Bottom"] = 3] = "Bottom";
        return SlideDirection;
      }(SlideDirection || {});
      var SlidePopup = exports('SlidePopup', (_dec = ccclass('SlidePopup'), _dec2 = property({
        type: Enum(SlideDirection)
      }), _dec3 = property({
        type: Enum(SlideDirection)
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlidePopup, _Component);
        function SlidePopup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "showDirection", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDirection", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDuration", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isOpenAtStart", _descriptor5, _assertThisInitialized(_this));
          _this.state = PopupState.None;
          return _this;
        }
        var _proto = SlidePopup.prototype;
        _proto.start = function start() {
          this.initPosition();
        };
        _proto.initPosition = function initPosition() {
          if (this.isOpenAtStart) {
            this.node.setPosition(new Vec3(0, 0, 0));
            this.state = PopupState.Shown;
          } else {
            var startPos = this.getStartPosition(this.hideDirection);
            this.node.setPosition(startPos);
            this.state = PopupState.Hidden;
          }
        };
        _proto.getStartPosition = function getStartPosition(direction) {
          var canvasSize = this.node.parent.getComponent(UITransform).contentSize;
          switch (direction) {
            case SlideDirection.Left:
              return new Vec3(-canvasSize.width, 0, 0);
            case SlideDirection.Right:
              return new Vec3(canvasSize.width, 0, 0);
            case SlideDirection.Top:
              return new Vec3(0, canvasSize.height, 0);
            case SlideDirection.Bottom:
              return new Vec3(0, -canvasSize.height, 0);
            default:
              return new Vec3(0, 0, 0);
          }
        };
        _proto.show = function show() {
          var _this2 = this;
          if (this.state !== PopupState.Hidden && this.state !== PopupState.Hiding && this.state !== PopupState.None) {
            return;
          }
          this.state = PopupState.Showing;
          var startPos = this.getStartPosition(this.showDirection);
          this.node.setPosition(startPos);
          tween(this.node).to(this.showDuration, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: 'sineOut'
          }).call(function () {
            _this2.state = PopupState.Shown;
          }).start();
        };
        _proto.hide = function hide() {
          var _this3 = this;
          if (this.state !== PopupState.Shown && this.state !== PopupState.Showing) {
            return;
          }
          this.state = PopupState.Hiding;
          var endPos = this.getStartPosition(this.hideDirection);
          tween(this.node).to(this.hideDuration, {
            position: endPos
          }, {
            easing: 'sineIn'
          }).call(function () {
            _this3.state = PopupState.Hidden;
          }).start();
        };
        return SlidePopup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showDirection", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideDirection.Left;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideDirection", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SlideDirection.Right;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isOpenAtStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SuitcaseCounter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SuitcasesDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, SuitcasesDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SuitcasesDataManager = module.SuitcasesDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "481d9Y5NMZHtIXBWN8qKw51", "SuitcaseCounter", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SuitcaseCounter = exports('SuitcaseCounter', (_dec = ccclass('SuitcaseCounter'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuitcaseCounter, _Component);
        function SuitcaseCounter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SuitcaseCounter.prototype;
        _proto.start = function start() {
          this.initWithSuitcaseCount();
        };
        _proto.initWithSuitcaseCount = /*#__PURE__*/function () {
          var _initWithSuitcaseCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (SuitcasesDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  SuitcasesDataManager.eventTarget.on('currentSuitcasesUpdated', this.updateMe, this);
                  if (!this.myLabel) {
                    _context.next = 11;
                    break;
                  }
                  _context.next = 9;
                  return SuitcasesDataManager.instance.getCurrentSuitcaseFilledCount();
                case 9:
                  _context.t0 = _context.sent.toString();
                  this.myLabel.string = "x" + _context.t0;
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initWithSuitcaseCount() {
            return _initWithSuitcaseCount.apply(this, arguments);
          }
          return initWithSuitcaseCount;
        }();
        _proto.updateMe = /*#__PURE__*/function () {
          var _updateMe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.myLabel) {
                    _context2.next = 5;
                    break;
                  }
                  _context2.next = 3;
                  return SuitcasesDataManager.instance.getCurrentSuitcaseFilledCount();
                case 3:
                  _context2.t0 = _context2.sent.toString();
                  this.myLabel.string = "x" + _context2.t0;
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function updateMe() {
            return _updateMe.apply(this, arguments);
          }
          return updateMe;
        }();
        return SuitcaseCounter;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SuitcaseItemsController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimerLabel.ts', './LoadingHider.ts', './UserDataManager.ts', './SuitcasesDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, Node, Color, UITransform, EventTarget, Component, TimerLabel, LoadingHider, UserDataManager, SuitcasesDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      Color = module.Color;
      UITransform = module.UITransform;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      TimerLabel = module.TimerLabel;
    }, function (module) {
      LoadingHider = module.LoadingHider;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      SuitcasesDataManager = module.SuitcasesDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _class4, _class5, _descriptor3, _dec5, _dec6, _dec7, _class7, _class8, _descriptor4, _descriptor5, _descriptor6, _dec8, _dec9, _class10, _class11, _descriptor7, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class13, _class14, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "1d664p+YMFEKo1NWdMTWkdy", "SuitcaseItemsController", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SuitcaseItemData = (_dec = ccclass('SuitcaseItemData'), _dec2 = property(Sprite), _dec(_class = (_class2 = function SuitcaseItemData() {
        _initializerDefineProperty(this, "itemName", _descriptor, this);
        _initializerDefineProperty(this, "itemSprite", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      var SuitcaseItems = (_dec3 = ccclass('SuitcaseItems'), _dec4 = property([SuitcaseItemData]), _dec3(_class4 = (_class5 = function SuitcaseItems() {
        _initializerDefineProperty(this, "itemDatas", _descriptor3, this);
      }, _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "itemDatas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4);
      var SuitcaseData = (_dec5 = ccclass('SuitcaseData'), _dec6 = property(Node), _dec7 = property(SuitcaseItems), _dec5(_class7 = (_class8 = function SuitcaseData() {
        _initializerDefineProperty(this, "suitcaseId", _descriptor4, this);
        _initializerDefineProperty(this, "suitcaseNode", _descriptor5, this);
        _initializerDefineProperty(this, "items", _descriptor6, this);
      }, (_descriptor4 = _applyDecoratedDescriptor(_class8.prototype, "suitcaseId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "suitcaseNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "items", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new SuitcaseItems();
        }
      })), _class8)) || _class7);
      var Suitcases = (_dec8 = ccclass('Suitcases'), _dec9 = property([SuitcaseData]), _dec8(_class10 = (_class11 = function Suitcases() {
        _initializerDefineProperty(this, "suitcasesDatas", _descriptor7, this);
      }, _descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "suitcasesDatas", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class11)) || _class10);
      var SuitcaseItemsController = exports('SuitcaseItemsController', (_dec10 = ccclass('SuitcaseItemsController'), _dec11 = property(Suitcases), _dec12 = property({
        type: Color
      }), _dec13 = property({
        type: Color
      }), _dec14 = property(Sprite), _dec15 = property(TimerLabel), _dec16 = property(LoadingHider), _dec17 = property(LoadingHider), _dec18 = property(Node), _dec10(_class13 = (_class14 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuitcaseItemsController, _Component);
        function SuitcaseItemsController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "suitcases", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notCollectedColor", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "collectedColor", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentMiningItemSprite", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miningItemTimerLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingHiderSuitcase", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadingHiderCurrentItem", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "allSuitcasesPackedNode", _descriptor15, _assertThisInitialized(_this));
          _this._currentMiningItem = void 0;
          _this._currentUserMiningSuitcaseItemInfo = void 0;
          _this.eventTarget = new EventTarget();
          return _this;
        }
        var _proto = SuitcaseItemsController.prototype;
        _proto.start = function start() {
          this.init();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  if (SuitcasesDataManager.instance.isInited) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 8;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 8:
                  _context.next = 5;
                  break;
                case 10:
                  _context.next = 12;
                  return this.setCurrentSuitcase();
                case 12:
                  _context.next = 14;
                  return this.setItemsColors();
                case 14:
                  this.currentMiningItemSprite.node.on(Node.EventType.TOUCH_END, this.onClickCurrentMiningItemSprite, this);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.onClickCurrentMiningItemSprite = /*#__PURE__*/function () {
          var _onClickCurrentMiningItemSprite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this._currentMiningItem && !this._currentUserMiningSuitcaseItemInfo)) {
                    _context2.next = 3;
                    break;
                  }
                  console.log('Nothing In Mining');
                  return _context2.abrupt("return");
                case 3:
                  if (!this.miningItemTimerLabel.isTimerActive) {
                    this.tryCollectCurrentMiningItem();
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onClickCurrentMiningItemSprite() {
            return _onClickCurrentMiningItemSprite.apply(this, arguments);
          }
          return onClickCurrentMiningItemSprite;
        }();
        _proto.tryCollectCurrentMiningItem = /*#__PURE__*/function () {
          var _tryCollectCurrentMiningItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return SuitcasesDataManager.instance.collectMinedItem();
                case 2:
                  _context3.next = 4;
                  return this.setCurrentSuitcase(true);
                case 4:
                  _context3.next = 6;
                  return this.setItemsColors(true);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function tryCollectCurrentMiningItem() {
            return _tryCollectCurrentMiningItem.apply(this, arguments);
          }
          return tryCollectCurrentMiningItem;
        }();
        _proto.setCurrentSuitcase = /*#__PURE__*/function () {
          var _setCurrentSuitcase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(withForceUpdate) {
            var currentSuitcaseIndex;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (withForceUpdate === void 0) {
                    withForceUpdate = false;
                  }
                  if (this.loadingHiderSuitcase) {
                    this.loadingHiderSuitcase.show();
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.show();
                  }
                  if (this.suitcases && this.suitcases.suitcasesDatas.length > 0) {
                    this.suitcases.suitcasesDatas.forEach(function (value) {
                      if (value.suitcaseNode) {
                        value.suitcaseNode.active = false;
                      } else {
                        console.error("suitcaseNode not inited with ID: " + value.suitcaseId);
                      }
                    });
                  } else {
                    console.error("Array suitcasesDatas empty.");
                  }
                  _context4.next = 6;
                  return SuitcasesDataManager.instance.getCurrentSuitcaseIndex(withForceUpdate);
                case 6:
                  currentSuitcaseIndex = _context4.sent;
                  if (!(currentSuitcaseIndex === null || currentSuitcaseIndex === undefined || !Number.isInteger(currentSuitcaseIndex))) {
                    _context4.next = 12;
                    break;
                  }
                  console.log("ALL SUITCASES FILLED!");
                  if (this.allSuitcasesPackedNode) {
                    this.allSuitcasesPackedNode.active = true;
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.node.active = false;
                  }
                  return _context4.abrupt("return");
                case 12:
                  if (currentSuitcaseIndex !== null && currentSuitcaseIndex >= 0 && this.suitcases.suitcasesDatas[currentSuitcaseIndex]) {
                    if (this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseNode) {
                      this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseNode.active = true;
                      console.log('Suitcase inited');
                    } else {
                      console.error("suitcaseNode not inited with ID: " + this.suitcases.suitcasesDatas[currentSuitcaseIndex].suitcaseId);
                    }
                  } else {
                    console.log('Not founded');
                  }
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function setCurrentSuitcase(_x) {
            return _setCurrentSuitcase.apply(this, arguments);
          }
          return setCurrentSuitcase;
        }();
        _proto.setItemsColors = /*#__PURE__*/function () {
          var _setItemsColors = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(withForceUpdate) {
            var _this2 = this;
            var currentSuitcaseIndex, allItems, currentUserSuitcaseItems, currentMiningUserItems, _loop, _ret, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (withForceUpdate === void 0) {
                    withForceUpdate = false;
                  }
                  _context6.next = 3;
                  return SuitcasesDataManager.instance.getCurrentSuitcaseIndex(withForceUpdate);
                case 3:
                  currentSuitcaseIndex = _context6.sent;
                  if (!(currentSuitcaseIndex === null || currentSuitcaseIndex === undefined || !Number.isInteger(currentSuitcaseIndex))) {
                    _context6.next = 9;
                    break;
                  }
                  console.log("ALL SUITCASES FILLED!");
                  if (this.allSuitcasesPackedNode) {
                    this.allSuitcasesPackedNode.active = true;
                  }
                  if (this.loadingHiderCurrentItem) {
                    this.loadingHiderCurrentItem.node.active = false;
                  }
                  return _context6.abrupt("return");
                case 9:
                  if (currentSuitcaseIndex !== null && currentSuitcaseIndex >= 0) {
                    this.suitcases.suitcasesDatas[currentSuitcaseIndex].items.itemDatas.forEach(function (value) {
                      if (value.itemSprite) {
                        value.itemSprite.color = _this2.notCollectedColor;
                      } else {
                        console.error("itemSprite not inited for: " + value.itemName);
                      }
                    });
                  } else {
                    console.log("Not founded");
                  }
                  _context6.next = 12;
                  return SuitcasesDataManager.instance.getAllItems(withForceUpdate);
                case 12:
                  allItems = _context6.sent;
                  _context6.next = 15;
                  return SuitcasesDataManager.instance.getCurrentUserSuitcaseItems(withForceUpdate);
                case 15:
                  currentUserSuitcaseItems = _context6.sent;
                  _context6.next = 18;
                  return SuitcasesDataManager.instance.getCurrentMiningUserSuitcaseItems(withForceUpdate);
                case 18:
                  currentMiningUserItems = _context6.sent;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var value, suitcaseItemDataName, suitcaseItemInfo, suitcaseUserItemInfo, currentUserMiningItem;
                    return _regeneratorRuntime().wrap(function _loop$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          value = _step.value;
                          suitcaseItemDataName = value.itemName;
                          if (suitcaseItemDataName) {
                            _context5.next = 5;
                            break;
                          }
                          console.error('Not founded suitcaseItemDataName');
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 5:
                          if (!(allItems.length === 0)) {
                            _context5.next = 7;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 7:
                          suitcaseItemInfo = allItems.find(function (item) {
                            return item.name === suitcaseItemDataName;
                          });
                          if (suitcaseItemInfo) {
                            _context5.next = 11;
                            break;
                          }
                          console.warn('Not founded suitcaseItemInfo');
                          return _context5.abrupt("return", 0);
                        case 11:
                          if (!(currentUserSuitcaseItems.length === 0)) {
                            _context5.next = 13;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 13:
                          suitcaseUserItemInfo = currentUserSuitcaseItems.find(function (item) {
                            return item.itemId === suitcaseItemInfo.id;
                          });
                          if (suitcaseUserItemInfo) {
                            _context5.next = 17;
                            break;
                          }
                          console.error('Not founded suitcaseUserItemInfo');
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 17:
                          if (!(currentMiningUserItems.length === 0)) {
                            _context5.next = 19;
                            break;
                          }
                          return _context5.abrupt("return", {
                            v: void 0
                          });
                        case 19:
                          currentUserMiningItem = currentMiningUserItems.find(function (item) {
                            return item.itemId === suitcaseItemInfo.id;
                          });
                          if (currentUserMiningItem) {
                            _context5.next = 23;
                            break;
                          }
                          console.log('Not founded currentUserMiningItem');
                          return _context5.abrupt("return", 0);
                        case 23:
                          if (suitcaseUserItemInfo.status == 'collected') {
                            value.itemSprite.color = _this2.collectedColor;
                          } else if (suitcaseUserItemInfo.status == 'mining') {
                            _this2.updateCurrentMiningItem(value.itemSprite.spriteFrame, suitcaseItemInfo, currentUserMiningItem);
                            _this2._currentUserMiningSuitcaseItemInfo = currentUserMiningItem;
                            _this2._currentMiningItem = suitcaseItemInfo;
                          }
                          if (_this2.loadingHiderSuitcase) {
                            _this2.loadingHiderSuitcase.hide();
                          }
                        case 25:
                        case "end":
                          return _context5.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(this.suitcases.suitcasesDatas[currentSuitcaseIndex].items.itemDatas);
                case 21:
                  if ((_step = _iterator()).done) {
                    _context6.next = 30;
                    break;
                  }
                  return _context6.delegateYield(_loop(), "t0", 23);
                case 23:
                  _ret = _context6.t0;
                  if (!(_ret === 0)) {
                    _context6.next = 26;
                    break;
                  }
                  return _context6.abrupt("continue", 28);
                case 26:
                  if (!_ret) {
                    _context6.next = 28;
                    break;
                  }
                  return _context6.abrupt("return", _ret.v);
                case 28:
                  _context6.next = 21;
                  break;
                case 30:
                case "end":
                  return _context6.stop();
              }
            }, _callee5, this);
          }));
          function setItemsColors(_x2) {
            return _setItemsColors.apply(this, arguments);
          }
          return setItemsColors;
        }();
        _proto.updateCurrentMiningItem = function updateCurrentMiningItem(spriteFrame, suitcaseItemInfo, userMiningItem) {
          if (!spriteFrame || !suitcaseItemInfo || !userMiningItem) {
            console.error('Not found spriteFrame or suitcaseItemInfo or userMiningItem');
            return;
          }
          if (this.currentMiningItemSprite) {
            this.currentMiningItemSprite.spriteFrame = spriteFrame;
            var node = this.currentMiningItemSprite.node;
            var sprite = this.currentMiningItemSprite;
            sprite.sizeMode = Sprite.SizeMode.RAW;
            var originalWidth = spriteFrame.width;
            var originalHeight = spriteFrame.height;
            var nodeTransform = node.getComponent(UITransform);
            var parentTransform = node.parent.getComponent(UITransform);
            var maxWidth = parentTransform.width;
            var maxHeight = parentTransform.height;
            var scaleX = maxWidth / originalWidth;
            var scaleY = maxHeight / originalHeight;
            var scale = Math.min(scaleX, scaleY);
            nodeTransform.width = originalWidth * scale;
            nodeTransform.height = originalHeight * scale;
          }
          if (this.miningItemTimerLabel) {
            this.miningItemTimerLabel.init(userMiningItem.dataStartMiningItem, suitcaseItemInfo.collectionDuration);
          }
          if (this.loadingHiderCurrentItem) {
            this.loadingHiderCurrentItem.hide();
          }
        };
        return SuitcaseItemsController;
      }(Component), (_descriptor8 = _applyDecoratedDescriptor(_class14.prototype, "suitcases", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Suitcases();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class14.prototype, "notCollectedColor", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class14.prototype, "collectedColor", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 255, 0);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class14.prototype, "currentMiningItemSprite", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class14.prototype, "miningItemTimerLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class14.prototype, "loadingHiderSuitcase", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class14.prototype, "loadingHiderCurrentItem", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class14.prototype, "allSuitcasesPackedNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class14)) || _class13));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SuitcasesDataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts', './UserDataManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, Component, ServerCommunicator, UserDataManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f1abcroKCxPOq6YLUSuGxvD", "SuitcasesDataManager", undefined);
      var ccclass = _decorator.ccclass;
      var SuitcasesDataManager = exports('SuitcasesDataManager', (_dec = ccclass('SuitcasesDataManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuitcasesDataManager, _Component);
        function SuitcasesDataManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentAllItems = [];
          _this.currentItems = [];
          _this.currentMiningItems = [];
          _this.currentSuitcases = [];
          return _this;
        }
        var _proto = SuitcasesDataManager.prototype;
        _proto.onLoad = function onLoad() {
          if (SuitcasesDataManager._instance) {
            console.warn("SuitcasesDataManager instance already exists!");
            this.destroy();
            return;
          }
          SuitcasesDataManager._instance = this;
          this.forceUpdateData();
        };
        _proto.forceUpdateData = /*#__PURE__*/function () {
          var _forceUpdateData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  this.setAllItemsFromServer();
                  this.setCurrentUserSuitcaseItemsFromServer();
                  this.setCurrentMiningUserSuitcaseItemsFromServer();
                  this.setCurrentSuitcasesFromServer();
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function forceUpdateData() {
            return _forceUpdateData.apply(this, arguments);
          }
          return forceUpdateData;
        }();
        _proto.setAllItemsFromServer = /*#__PURE__*/function () {
          var _setAllItemsFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var response, allItems;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_items');
                case 3:
                  response = _context2.sent;
                  allItems = response;
                  this.currentAllItems = allItems.map(function (item) {
                    return {
                      id: item[0],
                      name: item[1],
                      collectionDuration: item[2],
                      price: item[3],
                      chance: item[4],
                      suitcaseTypeId: item[5]
                    };
                  });
                  SuitcasesDataManager.eventTarget.emit('allItemsUpdated');
                  _context2.next = 12;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](0);
                  console.error('Error fetching items:', _context2.t0);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 9]]);
          }));
          function setAllItemsFromServer() {
            return _setAllItemsFromServer.apply(this, arguments);
          }
          return setAllItemsFromServer;
        }();
        _proto.setCurrentUserSuitcaseItemsFromServer = /*#__PURE__*/function () {
          var _setCurrentUserSuitcaseItemsFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var userId, response, items;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context3.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('get_user_suitcase_items?user_id=' + userId);
                case 4:
                  response = _context3.sent;
                  items = response;
                  if (Array.isArray(items)) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.abrupt("return");
                case 8:
                  this.currentItems = items.map(function (item) {
                    return {
                      id: item[0],
                      userId: item[1],
                      suitcaseId: item[2],
                      itemId: item[3],
                      status: item[4]
                    };
                  });
                  SuitcasesDataManager.eventTarget.emit('currentUserSuitcaseItemsUpdated');
                  _context3.next = 15;
                  break;
                case 12:
                  _context3.prev = 12;
                  _context3.t0 = _context3["catch"](0);
                  console.error('Error fetching user suitcase items:', _context3.t0);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 12]]);
          }));
          function setCurrentUserSuitcaseItemsFromServer() {
            return _setCurrentUserSuitcaseItemsFromServer.apply(this, arguments);
          }
          return setCurrentUserSuitcaseItemsFromServer;
        }();
        _proto.setCurrentMiningUserSuitcaseItemsFromServer = /*#__PURE__*/function () {
          var _setCurrentMiningUserSuitcaseItemsFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var userId, response, miningItems;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context4.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('get_all_user_mining_items?user_id=' + userId);
                case 4:
                  response = _context4.sent;
                  miningItems = response;
                  this.currentMiningItems = miningItems.map(function (item) {
                    return {
                      id: item[0],
                      dataStartMiningItem: item[1],
                      userId: item[2],
                      itemId: item[3],
                      isFinished: item[4]
                    };
                  });
                  SuitcasesDataManager.eventTarget.emit('currentMiningUserSuitcaseItemsUpdated');
                  _context4.next = 13;
                  break;
                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4["catch"](0);
                  console.error('Error fetching mining items:', _context4.t0);
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 10]]);
          }));
          function setCurrentMiningUserSuitcaseItemsFromServer() {
            return _setCurrentMiningUserSuitcaseItemsFromServer.apply(this, arguments);
          }
          return setCurrentMiningUserSuitcaseItemsFromServer;
        }();
        _proto.setCurrentSuitcasesFromServer = /*#__PURE__*/function () {
          var _setCurrentSuitcasesFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var userId, response, userSuitcases;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context5.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('get_all_user_suitcases?user_id=' + userId);
                case 4:
                  response = _context5.sent;
                  userSuitcases = response;
                  this.currentSuitcases = userSuitcases.map(function (item) {
                    return {
                      id: item[0],
                      userId: item[1],
                      suitcaseTypeId: item[2],
                      isComplete: item[3]
                    };
                  });
                  SuitcasesDataManager.eventTarget.emit('currentSuitcasesUpdated');
                  _context5.next = 13;
                  break;
                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](0);
                  console.error('Error fetching user suitcases:', _context5.t0);
                case 13:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[0, 10]]);
          }));
          function setCurrentSuitcasesFromServer() {
            return _setCurrentSuitcasesFromServer.apply(this, arguments);
          }
          return setCurrentSuitcasesFromServer;
        }();
        _proto.getAllItems = /*#__PURE__*/function () {
          var _getAllItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(forceUpdate) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentAllItems.length <= 0 || forceUpdate)) {
                    _context6.next = 4;
                    break;
                  }
                  _context6.next = 4;
                  return this.setAllItemsFromServer();
                case 4:
                  return _context6.abrupt("return", this.currentAllItems);
                case 5:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function getAllItems(_x) {
            return _getAllItems.apply(this, arguments);
          }
          return getAllItems;
        }();
        _proto.getCurrentUserSuitcaseItems = /*#__PURE__*/function () {
          var _getCurrentUserSuitcaseItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(forceUpdate) {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentItems.length <= 0 || forceUpdate)) {
                    _context7.next = 4;
                    break;
                  }
                  _context7.next = 4;
                  return this.setCurrentUserSuitcaseItemsFromServer();
                case 4:
                  return _context7.abrupt("return", this.currentItems);
                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
          function getCurrentUserSuitcaseItems(_x2) {
            return _getCurrentUserSuitcaseItems.apply(this, arguments);
          }
          return getCurrentUserSuitcaseItems;
        }();
        _proto.getCurrentMiningUserSuitcaseItems = /*#__PURE__*/function () {
          var _getCurrentMiningUserSuitcaseItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(forceUpdate) {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentMiningItems.length <= 0 || forceUpdate)) {
                    _context8.next = 4;
                    break;
                  }
                  _context8.next = 4;
                  return this.setCurrentMiningUserSuitcaseItemsFromServer();
                case 4:
                  return _context8.abrupt("return", this.currentMiningItems);
                case 5:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
          function getCurrentMiningUserSuitcaseItems(_x3) {
            return _getCurrentMiningUserSuitcaseItems.apply(this, arguments);
          }
          return getCurrentMiningUserSuitcaseItems;
        }();
        _proto.getCurrentSuitcaseIndex = /*#__PURE__*/function () {
          var _getCurrentSuitcaseIndex = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(forceUpdate) {
            var incompleteSuitcase;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentSuitcases.length <= 0 || forceUpdate)) {
                    _context9.next = 4;
                    break;
                  }
                  _context9.next = 4;
                  return this.setCurrentSuitcasesFromServer();
                case 4:
                  incompleteSuitcase = this.currentSuitcases.find(function (suitcase) {
                    return suitcase.isComplete === 0;
                  });
                  return _context9.abrupt("return", incompleteSuitcase ? incompleteSuitcase.suitcaseTypeId - 1 : null);
                case 6:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
          function getCurrentSuitcaseIndex(_x4) {
            return _getCurrentSuitcaseIndex.apply(this, arguments);
          }
          return getCurrentSuitcaseIndex;
        }();
        _proto.getCurrentSuitcaseFilledCount = /*#__PURE__*/function () {
          var _getCurrentSuitcaseFilledCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(forceUpdate) {
            var filledSuitcases;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentSuitcases.length <= 0 || forceUpdate)) {
                    _context10.next = 4;
                    break;
                  }
                  _context10.next = 4;
                  return this.setCurrentSuitcasesFromServer();
                case 4:
                  filledSuitcases = this.currentSuitcases.filter(function (suitcase) {
                    return suitcase.isComplete === 1;
                  });
                  return _context10.abrupt("return", filledSuitcases.length);
                case 6:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
          function getCurrentSuitcaseFilledCount(_x5) {
            return _getCurrentSuitcaseFilledCount.apply(this, arguments);
          }
          return getCurrentSuitcaseFilledCount;
        }();
        _proto.collectMinedItem = /*#__PURE__*/function () {
          var _collectMinedItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var userId;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context11.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('collect_mined_item?user_id=' + userId);
                case 4:
                  return _context11.abrupt("return", true);
                case 7:
                  _context11.prev = 7;
                  _context11.t0 = _context11["catch"](0);
                  console.error('Error collecting mined item:', _context11.t0);
                  return _context11.abrupt("return", false);
                case 11:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, null, [[0, 7]]);
          }));
          function collectMinedItem() {
            return _collectMinedItem.apply(this, arguments);
          }
          return collectMinedItem;
        }();
        _createClass(SuitcasesDataManager, [{
          key: "isInited",
          get: function get() {
            return this.currentAllItems.length > 0 && this.currentMiningItems.length > 0 && this.currentSuitcases.length > 0;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("SuitcasesDataManager instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return SuitcasesDataManager;
      }(Component), _class2._instance = void 0, _class2.eventTarget = new EventTarget(), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts', './ButtonFeedbacks.ts', './PopupManager.ts', './TasksDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Button, Sprite, SpriteFrame, Component, TelegramWebApp, ButtonFeedbacks, PopupManager, TaskType, TasksDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }, function (module) {
      ButtonFeedbacks = module.ButtonFeedbacks;
    }, function (module) {
      PopupManager = module.PopupManager;
    }, function (module) {
      TaskType = module.TaskType;
      TasksDataManager = module.TasksDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "16834gY+L5A5rZb5lxvMF3Q", "TaskItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TaskItem = exports('TaskItem', (_dec = ccclass('TaskItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Sprite), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(Sprite), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TaskItem, _Component);
        function TaskItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rewardLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goButton", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonIconSprite", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isCompletedIcon", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isNotCompletedIcon", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSprite", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subscribeIcon", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moneyIcon", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "friendsIcon", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "otherIcon", _descriptor11, _assertThisInitialized(_this));
          _this.myTaskData = void 0;
          return _this;
        }
        var _proto = TaskItem.prototype;
        _proto.init = function init(task) {
          this.myTaskData = task;
          this.updateMe();
        };
        _proto.updateMe = function updateMe() {
          if (this.nameLabel) {
            this.nameLabel.string = this.myTaskData.taskInfo.name;
          }
          if (this.rewardLabel) {
            this.rewardLabel.string = "+" + this.myTaskData.taskInfo.reward.toString();
          }
          if (this.iconSprite && this.otherIcon && this.subscribeIcon && this.moneyIcon && this.friendsIcon) {
            switch (this.myTaskData.taskInfo.taskType) {
              case TaskType.GoTo:
              case TaskType.Other:
                this.iconSprite.spriteFrame = this.otherIcon;
                break;
              case TaskType.Subscribe:
                this.iconSprite.spriteFrame = this.subscribeIcon;
                break;
              case TaskType.MoneyCount:
                this.iconSprite.spriteFrame = this.moneyIcon;
                break;
              case TaskType.FriendsCount:
                this.iconSprite.spriteFrame = this.friendsIcon;
                break;
              default:
                console.log("Unknown task type");
                break;
            }
          }
          if (this.goButton && this.buttonIconSprite) {
            if (this.myTaskData.userTaskInfo.status === "completed") {
              if (this.isCompletedIcon) {
                this.buttonIconSprite.spriteFrame = this.isCompletedIcon;
              }
              if (this.goButton.getComponent(ButtonFeedbacks)) {
                this.goButton.getComponent(ButtonFeedbacks).enabled = false;
              }
              this.goButton.interactable = false;
            } else {
              if (this.isNotCompletedIcon) {
                this.buttonIconSprite.spriteFrame = this.isNotCompletedIcon;
              }
              if (this.goButton.getComponent(ButtonFeedbacks)) {
                this.goButton.getComponent(ButtonFeedbacks).enabled = true;
              }
              this.goButton.interactable = true;
            }
            this.goButton.node.off('click');
            this.goButton.node.on('click', this.onTaskButtonClicked, this);
          }
        };
        _proto.onTaskButtonClicked = /*#__PURE__*/function () {
          var _onTaskButtonClicked = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var isNowCompleted;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.myTaskData.userTaskInfo.status === "completed")) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.next = 4;
                  return this.checkTaskIsComplitedNow();
                case 4:
                  isNowCompleted = _context.sent;
                  if (isNowCompleted) {
                    TasksDataManager.instance.forceUpdateData();
                  } else {
                    this.goToCompleteTask();
                  }
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onTaskButtonClicked() {
            return _onTaskButtonClicked.apply(this, arguments);
          }
          return onTaskButtonClicked;
        }();
        _proto.checkTaskIsComplitedNow = /*#__PURE__*/function () {
          var _checkTaskIsComplitedNow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return TasksDataManager.instance.checkTaskCompleted(this.myTaskData.userTaskInfo.taskId);
                case 2:
                  return _context2.abrupt("return", _context2.sent);
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function checkTaskIsComplitedNow() {
            return _checkTaskIsComplitedNow.apply(this, arguments);
          }
          return checkTaskIsComplitedNow;
        }();
        _proto.goToCompleteTask = /*#__PURE__*/function () {
          var _goToCompleteTask = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this.myTaskData.taskInfo.taskType;
                  _context3.next = _context3.t0 === TaskType.GoTo ? 3 : _context3.t0 === TaskType.Other ? 3 : _context3.t0 === TaskType.Subscribe ? 6 : _context3.t0 === TaskType.MoneyCount ? 9 : _context3.t0 === TaskType.FriendsCount ? 11 : 13;
                  break;
                case 3:
                  _context3.next = 5;
                  return this.goOtherComplete();
                case 5:
                  return _context3.abrupt("break", 15);
                case 6:
                  _context3.next = 8;
                  return this.goSubscribeComplete();
                case 8:
                  return _context3.abrupt("break", 15);
                case 9:
                  this.goMoneyComplete();
                  return _context3.abrupt("break", 15);
                case 11:
                  this.goFriendsComplete();
                  return _context3.abrupt("break", 15);
                case 13:
                  console.log("Unknown task type");
                  return _context3.abrupt("break", 15);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function goToCompleteTask() {
            return _goToCompleteTask.apply(this, arguments);
          }
          return goToCompleteTask;
        }();
        _proto.goOtherComplete = /*#__PURE__*/function () {
          var _goOtherComplete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var tgWebApp;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context4.next = 3;
                  return tgWebApp.init();
                case 3:
                  tgWebApp.openLink(this.myTaskData.taskInfo.details);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function goOtherComplete() {
            return _goOtherComplete.apply(this, arguments);
          }
          return goOtherComplete;
        }();
        _proto.goSubscribeComplete = /*#__PURE__*/function () {
          var _goSubscribeComplete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var tgWebApp, forUrlSliced, link;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context5.next = 3;
                  return tgWebApp.init();
                case 3:
                  forUrlSliced = this.myTaskData.taskInfo.details.slice(1);
                  link = "https://t.me/" + forUrlSliced;
                  tgWebApp.openTelegramLink(link);
                case 6:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function goSubscribeComplete() {
            return _goSubscribeComplete.apply(this, arguments);
          }
          return goSubscribeComplete;
        }();
        _proto.goMoneyComplete = function goMoneyComplete() {
          PopupManager.getInstance().hidePopup(0);
        };
        _proto.goFriendsComplete = function goFriendsComplete() {
          PopupManager.getInstance().switchPopup(0, 3);
        };
        return TaskItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonIconSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isCompletedIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "isNotCompletedIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "subscribeIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "moneyIcon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "friendsIcon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "otherIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TasksDataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts', './UserDataManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, Component, ServerCommunicator, UserDataManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "385967+RUlB+5nwHddYGK5Q", "TasksDataManager", undefined);
      var ccclass = _decorator.ccclass;
      var TaskType = exports('TaskType', /*#__PURE__*/function (TaskType) {
        TaskType["Other"] = "Other";
        TaskType["GoTo"] = "GoTo";
        TaskType["Subscribe"] = "Subscribe";
        TaskType["MoneyCount"] = "MoneyCount";
        TaskType["FriendsCount"] = "FriendsCount";
        return TaskType;
      }({}));
      var TasksDataManager = exports('TasksDataManager', (_dec = ccclass('TasksDataManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TasksDataManager, _Component);
        function TasksDataManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.currentTasks = [];
          _this.currentUserTasks = [];
          return _this;
        }
        var _proto = TasksDataManager.prototype;
        _proto.onLoad = function onLoad() {
          if (TasksDataManager._instance) {
            console.warn("TasksDataManager instance already exists!");
            this.destroy();
            return;
          }
          TasksDataManager._instance = this;
          this.forceUpdateData();
        };
        _proto.forceUpdateData = /*#__PURE__*/function () {
          var _forceUpdateData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  _context.next = 7;
                  return this.setAllTasksFromServer();
                case 7:
                  _context.next = 9;
                  return this.setCurrentUserTasksFromServer();
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function forceUpdateData() {
            return _forceUpdateData.apply(this, arguments);
          }
          return forceUpdateData;
        }();
        _proto.setAllTasksFromServer = /*#__PURE__*/function () {
          var _setAllTasksFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;
            var response, allTasks;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_tasks');
                case 3:
                  response = _context2.sent;
                  allTasks = response;
                  this.currentTasks = allTasks.map(function (item) {
                    return {
                      id: item[0],
                      name: item[1],
                      reward: item[2],
                      taskType: _this2.mapTaskType(item[3]),
                      details: item[4]
                    };
                  });
                  TasksDataManager.eventTarget.emit('allTasksUpdated');
                  _context2.next = 12;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](0);
                  console.error('Error fetching tasks:', _context2.t0);
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 9]]);
          }));
          function setAllTasksFromServer() {
            return _setAllTasksFromServer.apply(this, arguments);
          }
          return setAllTasksFromServer;
        }();
        _proto.setCurrentUserTasksFromServer = /*#__PURE__*/function () {
          var _setCurrentUserTasksFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var userId, response, userTasks;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  userId = UserDataManager.instance.getUserId();
                  _context3.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('get_user_tasks?user_id=' + userId);
                case 4:
                  response = _context3.sent;
                  userTasks = response;
                  if (Array.isArray(userTasks)) {
                    _context3.next = 8;
                    break;
                  }
                  return _context3.abrupt("return");
                case 8:
                  this.currentUserTasks = userTasks.map(function (item) {
                    return {
                      id: item[0],
                      userId: item[1],
                      taskId: item[2],
                      status: item[3]
                    };
                  });
                  TasksDataManager.eventTarget.emit('currentUserTasksUpdated');
                  _context3.next = 15;
                  break;
                case 12:
                  _context3.prev = 12;
                  _context3.t0 = _context3["catch"](0);
                  console.error('Error fetching user tasks:', _context3.t0);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 12]]);
          }));
          function setCurrentUserTasksFromServer() {
            return _setCurrentUserTasksFromServer.apply(this, arguments);
          }
          return setCurrentUserTasksFromServer;
        }();
        _proto.checkTaskCompleted = /*#__PURE__*/function () {
          var _checkTaskCompleted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(taskId) {
            var userId, response, taskCompleted;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context4.next = 5;
                    break;
                  }
                  _context4.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context4.next = 0;
                  break;
                case 5:
                  userId = UserDataManager.instance.getUserId();
                  _context4.next = 8;
                  return ServerCommunicator.instance.sendGetRequest('check_task_completion?user_id=' + userId + "&task_id=" + taskId);
                case 8:
                  response = _context4.sent;
                  taskCompleted = response[0];
                  return _context4.abrupt("return", taskCompleted);
                case 11:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function checkTaskCompleted(_x) {
            return _checkTaskCompleted.apply(this, arguments);
          }
          return checkTaskCompleted;
        }();
        _proto.getAllTasks = /*#__PURE__*/function () {
          var _getAllTasks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(forceUpdate) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentTasks.length <= 0 || forceUpdate)) {
                    _context5.next = 4;
                    break;
                  }
                  _context5.next = 4;
                  return this.setAllTasksFromServer();
                case 4:
                  return _context5.abrupt("return", this.currentTasks);
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function getAllTasks(_x2) {
            return _getAllTasks.apply(this, arguments);
          }
          return getAllTasks;
        }();
        _proto.getUserTasks = /*#__PURE__*/function () {
          var _getUserTasks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(forceUpdate) {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (forceUpdate === void 0) {
                    forceUpdate = false;
                  }
                  if (!(this.currentUserTasks.length <= 0 || forceUpdate)) {
                    _context6.next = 4;
                    break;
                  }
                  _context6.next = 4;
                  return this.setCurrentUserTasksFromServer();
                case 4:
                  return _context6.abrupt("return", this.currentUserTasks);
                case 5:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function getUserTasks(_x3) {
            return _getUserTasks.apply(this, arguments);
          }
          return getUserTasks;
        }();
        _proto.mapTaskType = function mapTaskType(taskTypeString) {
          switch (taskTypeString) {
            case "GoTo":
              return TaskType.GoTo;
            case "Subscribe":
              return TaskType.Subscribe;
            case "MoneyCount":
              return TaskType.MoneyCount;
            case "FriendsCount":
              return TaskType.FriendsCount;
            case "Other":
            default:
              return TaskType.Other;
          }
        };
        _createClass(TasksDataManager, [{
          key: "isInited",
          get: function get() {
            return this.currentTasks.length > 0 && this.currentUserTasks.length > 0;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("TasksDataManager instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return TasksDataManager;
      }(Component), _class2._instance = void 0, _class2.eventTarget = new EventTarget(), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TasksScrollViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts', './TasksDataManager.ts', './TaskItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, Component, UserDataManager, TasksDataManager, TaskItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }, function (module) {
      TasksDataManager = module.TasksDataManager;
    }, function (module) {
      TaskItem = module.TaskItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "def37DDs75PEqSD9znf/bye", "TasksScrollViewer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TasksScrollViewer = exports('TasksScrollViewer', (_dec = ccclass('TasksScrollViewer'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TasksScrollViewer, _Component);
        function TasksScrollViewer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "taskItemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TasksScrollViewer.prototype;
        _proto.start = function start() {
          this.init();
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  if (TasksDataManager.instance.isInited) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 8;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 8:
                  _context.next = 5;
                  break;
                case 10:
                  TasksDataManager.eventTarget.on('currentUserTasksUpdated', this.updateMe, this);
                  this.updateMe();
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.updateMe = /*#__PURE__*/function () {
          var _updateMe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var userTasksInfos, allTasksInfos, taskInfoMap, taskDataArray;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (TasksDataManager.instance.isInited) {
                    _context2.next = 5;
                    break;
                  }
                  _context2.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context2.next = 0;
                  break;
                case 5:
                  _context2.next = 7;
                  return TasksDataManager.instance.getUserTasks();
                case 7:
                  userTasksInfos = _context2.sent;
                  _context2.next = 10;
                  return TasksDataManager.instance.getAllTasks();
                case 10:
                  allTasksInfos = _context2.sent;
                  taskInfoMap = new Map();
                  allTasksInfos.forEach(function (taskInfo) {
                    taskInfoMap.set(taskInfo.id, taskInfo);
                  });
                  taskDataArray = userTasksInfos.map(function (userTaskInfo) {
                    var taskInfo = taskInfoMap.get(userTaskInfo.taskId);
                    return {
                      taskInfo: taskInfo,
                      userTaskInfo: userTaskInfo
                    };
                  });
                  this.updateTasksList(taskDataArray);
                  console.log("TASK DATA ARRAY:" + taskDataArray);
                case 16:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function updateMe() {
            return _updateMe.apply(this, arguments);
          }
          return updateMe;
        }();
        _proto.updateTasksList = function updateTasksList(tasks) {
          if (this.contentNode.children.length > 0) {
            this.contentNode.removeAllChildren();
          }
          if (this.taskItemPrefab && this.contentNode) {
            for (var i = 0; i < tasks.length; i++) {
              var newFriendItemPrefab = instantiate(this.taskItemPrefab);
              this.contentNode.addChild(newFriendItemPrefab);
              newFriendItemPrefab.getComponent(TaskItem).init(tasks[i]);
            }
          }
        };
        return TasksScrollViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "taskItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/telegram-web.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, sys;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "f264fjmTxJJEp4hiLyX+sL4", "telegram-web", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tgLoadPromise = new Promise(function (resolve, reject) {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          var script = document.createElement("script");
          script.src = "https://telegram.org/js/telegram-web-app.js";
          script.async = true;
          script.onload = function () {
            var intervalId = setInterval(function () {
              if (window.Telegram && window.Telegram.WebApp) {
                resolve(window.Telegram.WebApp);
                clearInterval(intervalId);
              }
            }, 100);
          };
          script.onerror = function () {
            return reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));
          };
          document.head.appendChild(script);
        }
      });
      var TelegramWebApp = exports('TelegramWebApp', (_dec = ccclass('TelegramWebApp'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TelegramWebApp() {
          this._tgWebAppJS = null;
        }
        var _proto = TelegramWebApp.prototype;
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return tgLoadPromise;
                case 2:
                  this._tgWebAppJS = _context.sent;
                  if (!this._tgWebAppJS) {
                    _context.next = 8;
                    break;
                  }
                  this.expand();
                  return _context.abrupt("return", Promise.resolve({
                    success: true
                  }));
                case 8:
                  return _context.abrupt("return", Promise.resolve({
                    success: false
                  }));
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.openLink = function openLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openLink(url);
        };
        _proto.openTelegramLink = function openTelegramLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          this._tgWebAppJS.openTelegramLink(url);
        };
        _proto.share = function share(url, text) {
          var shareUrl = 'https://t.me/share/url?url=' + url + '&' + new URLSearchParams({
            text: text || ''
          }).toString();
          this.openTelegramLink(shareUrl);
        };
        _proto.shareToStory = function shareToStory(media_url, shareText, widget_link_url, widget_link_name) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }
          var widget_link = {
            text: shareText,
            widget_link: {
              url: widget_link_url,
              name: widget_link_name
            }
          };
          this._tgWebAppJS.shareToStory(media_url, widget_link);
        };
        _proto.expand = function expand() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          if (!this._tgWebAppJS.isExpanded) {
            this._tgWebAppJS.expand();
          }
        };
        _proto.getTelegramWebApp = function getTelegramWebApp() {
          return this._tgWebAppJS;
        };
        _proto.getTelegramWebAppInitData = function getTelegramWebAppInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe;
        };
        _proto.getTelegramUser = function getTelegramUser() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initDataUnsafe.user;
        };
        _proto.getTelegramInitData = function getTelegramInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          return this._tgWebAppJS.initData;
        };
        _proto.openInvoice = function openInvoice(url, callback) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }
          this._tgWebAppJS.openInvoice(url, callback);
        };
        _proto.alert = function alert(message) {
          this._tgWebAppJS.showAlert(message);
        };
        _createClass(TelegramWebApp, null, [{
          key: "Instance",
          get: function get() {
            if (!TelegramWebApp._instance) {
              TelegramWebApp._instance = new TelegramWebApp();
            }
            return TelegramWebApp._instance;
          }
        }]);
        return TelegramWebApp;
      }(), _class2._instance = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestGetLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, ServerCommunicator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7357eDSAhRC5p0V45vZrS5g", "TestGetLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TestGetLabel = exports('TestGetLabel', (_dec = ccclass('TestGetLabel'), _dec2 = property(ServerCommunicator), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestGetLabel, _Component);
        function TestGetLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "serverCommunicator", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _this.currentAllItems = [];
          return _this;
        }
        var _proto = TestGetLabel.prototype;
        _proto.start = function start() {
          this.getMetod();
        };
        _proto.getMetod = /*#__PURE__*/function () {
          var _getMetod = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, allItems;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.serverCommunicator.sendGetRequest('get_all_items');
                case 3:
                  response = _context.sent;
                  allItems = response;
                  this.currentAllItems = allItems.map(function (item) {
                    return {
                      id: item[0],
                      name: item[1],
                      collectionDuration: item[2],
                      price: item[3],
                      chance: item[4],
                      suitcaseTypeId: item[5]
                    };
                  });
                  _context.next = 11;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  console.error('Error fetching items:', _context.t0);
                case 11:
                  this.label.string = this.currentAllItems[1].name;
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[0, 8]]);
          }));
          function getMetod() {
            return _getMetod.apply(this, arguments);
          }
          return getMetod;
        }();
        return TestGetLabel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverCommunicator", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimerLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0f0bdgZInxLC7IsnEFjdw6T", "TimerLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TimerLabel = exports('TimerLabel', (_dec = ccclass('TimerLabel'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimerLabel, _Component);
        function TimerLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myLabel", _descriptor, _assertThisInitialized(_this));
          _this.endDate = null;
          _this.isTimerActive = false;
          _this.timeDifference = 0;
          return _this;
        }
        var _proto = TimerLabel.prototype;
        _proto.start = function start() {
          this.myLabel.string = '00:00:00:00';
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dateString, duration) {
            var startDate, DurationMs;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  startDate = new Date(dateString.replace(/-/g, "/"));
                  DurationMs = duration * 60 * 60 * 1000;
                  this.timeDifference = UserDataManager.instance.getTimeDifference();
                  if (this.timeDifference) {
                    _context.next = 11;
                    break;
                  }
                  console.error("cant get sync time from userDataManager");
                  return _context.abrupt("return");
                case 11:
                  this.endDate = new Date(startDate.getTime() + DurationMs);
                  this.isTimerActive = true;
                  this.updateLabel();
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.update = function update(dt) {
          if (this.isTimerActive && this.endDate) {
            this.updateLabel();
          }
        };
        _proto.updateLabel = function updateLabel() {
          var currentTime = new Date(new Date().getTime() + this.timeDifference);
          var timeLeft = this.endDate.getTime() - currentTime.getTime();
          if (timeLeft <= 0) {
            this.myLabel.string = "00:00:00:00";
            this.isTimerActive = false;
          } else {
            this.myLabel.string = this.formatTimeLeft(timeLeft);
          }
        };
        _proto.formatTimeLeft = function formatTimeLeft(timeLeft) {
          var seconds = Math.floor(timeLeft / 1000 % 60);
          var minutes = Math.floor(timeLeft / (1000 * 60) % 60);
          var hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
          var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          function padZero(num) {
            return (num < 10 ? '0' : '') + num;
          }
          return padZero(days) + ':' + padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
        };
        return TimerLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserDataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ServerCommunicator.ts', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _createClass, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, EventTarget, Component, ServerCommunicator, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }, function (module) {
      ServerCommunicator = module.ServerCommunicator;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "c0f31uhSI5LEIE63jTEDd3D", "UserDataManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserDataManager = exports('UserDataManager', (_dec = ccclass('UserDataManager'), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserDataManager, _Component);
        function UserDataManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isDebug", _descriptor, _assertThisInitialized(_this));
          _this.currentUserInfo = null;
          _this.speedInfos = [];
          _this.durationInfos = [];
          _this.isTimeSyncWithServer = false;
          _this.timeDifference = null;
          _this.firstname = "undefined";
          _this.username = "undefined";
          _this.defaultName = "Anonymous";
          return _this;
        }
        var _proto = UserDataManager.prototype;
        _proto.onLoad = function onLoad() {
          if (UserDataManager._instance) {
            console.warn("UserDataManager instance already exists!");
            this.destroy();
            return;
          }
          UserDataManager._instance = this;
          this.syncTimeWithServer();
          this.setSpeedInfosFromServer();
          this.setDurationInfosFromServer();
          this.forceUpdateUserInfo();
        };
        _proto.getUserId = function getUserId() {
          if (this.currentUserInfo) {
            return this.currentUserInfo.id;
          } else {
            console.error("Error: user information is missing");
            return null;
          }
        };
        _proto.getUserName = function getUserName() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.name;
        };
        _proto.getUserPhotoUrl = function getUserPhotoUrl() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.photoUrl;
        };
        _proto.getUserBalance = function getUserBalance() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.balance;
        };
        _proto.getUserMiningStartDate = function getUserMiningStartDate() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.dateStartMining;
        };
        _proto.getUserSpeedId = function getUserSpeedId() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.speedId;
        };
        _proto.getUserDurationId = function getUserDurationId() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.durationId;
        };
        _proto.getUserInvitedBy = function getUserInvitedBy() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.currentUserInfo.invitedBy;
        };
        _proto.getUserCurrentSpeed = function getUserCurrentSpeed() {
          var _this2 = this;
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var speedInfo = this.speedInfos.find(function (info) {
            return info.id === _this2.getUserSpeedId();
          });
          return speedInfo ? speedInfo.speed : null;
        };
        _proto.getSpeedPriceById = function getSpeedPriceById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var speedInfo = this.speedInfos.find(function (info) {
            return info.id === id;
          });
          return speedInfo ? speedInfo.price : null;
        };
        _proto.getMiningSpeedById = function getMiningSpeedById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var speedInfo = this.speedInfos.find(function (info) {
            return info.id === id;
          });
          return speedInfo ? speedInfo.speed : null;
        };
        _proto.getSpeedInfosCount = function getSpeedInfosCount() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.speedInfos.length;
        };
        _proto.getUserCurrentDuration = function getUserCurrentDuration() {
          var _this3 = this;
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var durationInfo = this.durationInfos.find(function (info) {
            return info.id === _this3.getUserDurationId();
          });
          return durationInfo ? durationInfo.duration : null;
        };
        _proto.getDurationPriceById = function getDurationPriceById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var durationInfo = this.durationInfos.find(function (info) {
            return info.id === id;
          });
          return durationInfo ? durationInfo.price : null;
        };
        _proto.getMiningDurationById = function getMiningDurationById(id) {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          var durationInfo = this.durationInfos.find(function (info) {
            return info.id === id;
          });
          return durationInfo ? durationInfo.duration : null;
        };
        _proto.getDurationInfosCount = function getDurationInfosCount() {
          if (!this.currentUserInfo) {
            console.error("Error: user information is missing");
            return null;
          }
          return this.durationInfos.length;
        };
        _proto.syncTimeWithServer = /*#__PURE__*/function () {
          var _syncTimeWithServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response, serverTimeString, serverTime;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.isTimeSyncWithServer) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return ServerCommunicator.instance.sendGetRequest('get_server_time');
                case 5:
                  response = _context.sent;
                  serverTimeString = response;
                  serverTime = new Date(serverTimeString.replace(/-/g, "/"));
                  this.timeDifference = serverTime.getTime() - new Date().getTime();
                  this.isTimeSyncWithServer = true;
                  _context.next = 15;
                  break;
                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](2);
                  console.error('Error fetching server time:', _context.t0);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[2, 12]]);
          }));
          function syncTimeWithServer() {
            return _syncTimeWithServer.apply(this, arguments);
          }
          return syncTimeWithServer;
        }();
        _proto.getTimeDifference = function getTimeDifference() {
          if (!this.isTimeSyncWithServer) {
            return null;
          }
          return this.timeDifference;
        };
        _proto.getGoodUserName = function getGoodUserName() {
          if (this.firstname === "undefined") {
            if (this.username === "undefined") {
              return this.defaultName;
            }
            return this.username;
          }
          return this.firstname;
        };
        _proto.forceUpdateUserInfo = function forceUpdateUserInfo() {
          this.setUserInfoFromServer();
        };
        _proto.setUserInfoFromServer = /*#__PURE__*/function () {
          var _setUserInfoFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var response, userInfoItems, tgWebApp, user, initData, _response, _userInfoItems;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  if (!this.isDebug) {
                    _context2.next = 11;
                    break;
                  }
                  _context2.next = 4;
                  return ServerCommunicator.instance.sendGetRequest('get_user?id=' + 2 + '&name=anrddewka&referal=' + 1);
                case 4:
                  response = _context2.sent;
                  userInfoItems = response;
                  console.log(userInfoItems);
                  this.currentUserInfo = {
                    id: userInfoItems.id,
                    name: userInfoItems.username,
                    photoUrl: userInfoItems.photo_url,
                    balance: userInfoItems.balance,
                    dateStartMining: userInfoItems.date_start_mining,
                    speedId: userInfoItems.speed_id,
                    durationId: userInfoItems.duration_id,
                    invitedBy: userInfoItems.invited_by
                  };
                  UserDataManager.eventTarget.emit('userDataUpdated');
                  _context2.next = 25;
                  break;
                case 11:
                  tgWebApp = TelegramWebApp.Instance;
                  _context2.next = 14;
                  return tgWebApp.init();
                case 14:
                  user = tgWebApp.getTelegramUser();
                  initData = tgWebApp.getTelegramWebAppInitData();
                  this.firstname = user.first_name;
                  this.username = user.username;
                  _context2.next = 20;
                  return ServerCommunicator.instance.sendGetRequest('get_user?id=' + user.id + '&name=' + user.username + '&referal=' + initData.start_param);
                case 20:
                  _response = _context2.sent;
                  _userInfoItems = _response;
                  console.log(_userInfoItems);
                  this.currentUserInfo = {
                    id: _userInfoItems.id,
                    name: _userInfoItems.username,
                    photoUrl: _userInfoItems.photo_url,
                    balance: _userInfoItems.balance,
                    dateStartMining: _userInfoItems.date_start_mining,
                    speedId: _userInfoItems.speed_id,
                    durationId: _userInfoItems.duration_id,
                    invitedBy: _userInfoItems.invited_by
                  };
                  UserDataManager.eventTarget.emit('userDataUpdated');
                case 25:
                  _context2.next = 30;
                  break;
                case 27:
                  _context2.prev = 27;
                  _context2.t0 = _context2["catch"](0);
                  console.error('Error setting user:', _context2.t0);
                case 30:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[0, 27]]);
          }));
          function setUserInfoFromServer() {
            return _setUserInfoFromServer.apply(this, arguments);
          }
          return setUserInfoFromServer;
        }();
        _proto.setSpeedInfosFromServer = /*#__PURE__*/function () {
          var _setSpeedInfosFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var response, allSpeeds;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_speeds');
                case 3:
                  response = _context3.sent;
                  allSpeeds = response;
                  this.speedInfos = [];
                  this.speedInfos = allSpeeds.map(function (item) {
                    return {
                      id: item[0],
                      speed: item[1],
                      price: item[2]
                    };
                  });
                  _context3.next = 12;
                  break;
                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](0);
                  console.error('Error fetching speeds:', _context3.t0);
                case 12:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 9]]);
          }));
          function setSpeedInfosFromServer() {
            return _setSpeedInfosFromServer.apply(this, arguments);
          }
          return setSpeedInfosFromServer;
        }();
        _proto.setDurationInfosFromServer = /*#__PURE__*/function () {
          var _setDurationInfosFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var response, allDurations;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return ServerCommunicator.instance.sendGetRequest('get_all_durations');
                case 3:
                  response = _context4.sent;
                  allDurations = response;
                  this.durationInfos = [];
                  this.durationInfos = allDurations.map(function (item) {
                    return {
                      id: item[0],
                      duration: item[1],
                      price: item[2]
                    };
                  });
                  _context4.next = 12;
                  break;
                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](0);
                  console.error('Error fetching durations:', _context4.t0);
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 9]]);
          }));
          function setDurationInfosFromServer() {
            return _setDurationInfosFromServer.apply(this, arguments);
          }
          return setDurationInfosFromServer;
        }();
        _createClass(UserDataManager, [{
          key: "isInited",
          get: function get() {
            if (this.currentUserInfo && this.speedInfos.length > 0 && this.durationInfos.length > 0 && this.isTimeSyncWithServer) {
              return true;
            }
            return false;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.error("UserDataManager instance is not initialized!");
            }
            return this._instance;
          }
        }]);
        return UserDataManager;
      }(Component), _class3._instance = void 0, _class3.eventTarget = new EventTarget(), _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "isDebug", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserInfoDisplay.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './telegram-web.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Sprite, ImageAsset, Texture2D, SpriteFrame, Component, TelegramWebApp;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      ImageAsset = module.ImageAsset;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      TelegramWebApp = module.TelegramWebApp;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "55d2bEdrVpIpou6drI10Zei", "UserInfoDisplay", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UserInfoDisplay = exports('UserInfoDisplay', (_dec = ccclass('UserInfoDisplay'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserInfoDisplay, _Component);
        function UserInfoDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userInfoLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatarUrlLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userAvatar", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UserInfoDisplay.prototype;
        _proto.start = function start() {
          this.updateUserInfo();
        };
        _proto.updateUserInfo = /*#__PURE__*/function () {
          var _updateUserInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var tgWebApp, user;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  tgWebApp = TelegramWebApp.Instance;
                  _context.next = 3;
                  return tgWebApp.init();
                case 3:
                  user = tgWebApp.getTelegramUser();
                  if (user) {
                    if (this.userInfoLabel) {
                      this.userInfoLabel.string = "ID: " + user.id + "\nUsername: " + user.username;
                    }
                    if (this.avatarUrlLabel) {
                      this.avatarUrlLabel.string = "" + user.photo_url;
                    }
                    if (user.photo_url && this.userAvatar) {
                      this.loadAvatar(user.photo_url);
                    }
                  } else {
                    console.error("User data is not available.");
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function updateUserInfo() {
            return _updateUserInfo.apply(this, arguments);
          }
          return updateUserInfo;
        }();
        _proto.loadAvatar = function loadAvatar(url) {
          var _this2 = this;
          if (!this.userAvatar) return;
          var imgAsset = new ImageAsset();
          var img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = url;
          img.onload = function () {
            imgAsset.reset(img);
            var texture = new Texture2D();
            texture.image = imgAsset;
            texture.setFilters(Texture2D.Filter.LINEAR, Texture2D.Filter.LINEAR);
            var spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            _this2.userAvatar.type = Sprite.Type.SIMPLE;
            _this2.userAvatar.sizeMode = Sprite.SizeMode.RAW;
            _this2.userAvatar.spriteFrame = spriteFrame;
          };
          img.onerror = function () {
            console.error("Failed to load avatar image.");
          };
        };
        return UserInfoDisplay;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userInfoLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatarUrlLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userAvatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UsernameLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UserDataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, UserDataManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UserDataManager = module.UserDataManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "25594+nJ6xFq6zve7Du05Ed", "UsernameLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UsernameLabel = exports('UsernameLabel', (_dec = ccclass('UsernameLabel'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UsernameLabel, _Component);
        function UsernameLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "myLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UsernameLabel.prototype;
        _proto.start = function start() {
          this.initWithUserData();
        };
        _proto.initWithUserData = /*#__PURE__*/function () {
          var _initWithUserData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (UserDataManager.instance.isInited) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 100);
                  });
                case 3:
                  _context.next = 0;
                  break;
                case 5:
                  UserDataManager.eventTarget.on('userDataUpdated', this.updateMe, this);
                  if (this.myLabel) {
                    this.myLabel.string = UserDataManager.instance.getGoodUserName();
                  }
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initWithUserData() {
            return _initWithUserData.apply(this, arguments);
          }
          return initWithUserData;
        }();
        _proto.updateMe = function updateMe() {
          if (this.myLabel) {
            this.myLabel.string = UserDataManager.instance.getGoodUserName();
          }
        };
        return UsernameLabel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map