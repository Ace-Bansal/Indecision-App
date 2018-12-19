'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
        _this.state = {
            options: ['Option one', 'Option two', 'Option three'],
            chosenOption: ""
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'selectOption',
        value: function selectOption() {
            var _this2 = this;

            var x = Math.floor(Math.random() * this.state.options.length);
            this.setState(function () {
                return {
                    chosenOption: _this2.state.options[x]
                };
            });
        }
    }, {
        key: 'handleFormSubmit',
        value: function handleFormSubmit(newOption) {
            if (newOption.length == 0) {
                return 'You tried to enter an empty string';
            } else {
                if (this.state.options.indexOf(newOption) > -1) {
                    return 'This option already exists';
                }
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(newOption)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your hands in the life of a computer!";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOptions, { handleFormSubmit: this.handleFormSubmit }),
                React.createElement(Action, { chosenOption: this.state.chosenOption, hasOptions: this.state.options.length > 0 ? true : false, selectOption: this.selectOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.selectOption, disabled: !this.props.hasOptions },
                    'What should I do?'
                ),
                this.props.hasOptions ? React.createElement(
                    'h2',
                    null,
                    this.props.chosenOption
                ) : undefined
            );
        }
    }]);

    return Action;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'printAllOptions',
        value: function printAllOptions(optionsArray) {
            var optionList = optionsArray.map(function (x) {
                return React.createElement(Option, { option: x });
            });
            return optionList;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.options.length > 0 ? React.createElement(
                    'h3',
                    null,
                    'Here are the options'
                ) : React.createElement(
                    'h3',
                    null,
                    'No Options'
                ),
                this.printAllOptions(this.props.options),
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this7 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this7.onFormSubmit = _this7.onFormSubmit.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
    }

    _createClass(AddOptions, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var addedOption = e.target.elements.input.value.trim();
            var error = this.props.handleFormSubmit(addedOption);
            this.setState(function () {
                return {
                    error: error
                };
            });

            e.target.elements.input.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error != undefined ? React.createElement(
                    'h3',
                    null,
                    this.state.error
                ) : undefined,
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'input' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
