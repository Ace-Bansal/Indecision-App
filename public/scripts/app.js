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
        _this.handleRemoveSingle = _this.handleRemoveSingle.bind(_this);
        _this.state = {
            options: _this.props.options,
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
        key: 'handleRemoveSingle',
        value: function handleRemoveSingle(option) {
            this.setState(function (prevState) {
                var x = prevState.options.indexOf(option);
                prevState.options.splice(x, 1);
                return {
                    options: prevState.options
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = "Put your hands in the life of a computer!";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll, handleRemoveSingle: this.handleRemoveSingle }),
                React.createElement(AddOptions, { handleFormSubmit: this.handleFormSubmit }),
                React.createElement(Action, { chosenOption: this.state.chosenOption, hasOptions: this.state.options.length > 0 ? true : false, selectOption: this.selectOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.selectOption, disabled: !props.hasOptions },
            'What should I do?'
        ),
        props.hasOptions ? React.createElement(
            'h2',
            null,
            props.chosenOption
        ) : undefined
    );
};

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this3 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this3.handleRemoveSingle = _this3.handleRemoveSingle.bind(_this3);
        return _this3;
    }

    _createClass(Option, [{
        key: 'handleRemoveSingle',
        value: function handleRemoveSingle() {
            this.props.handleRemoveSingle(this.props.option);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.option
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveSingle },
                    'Remove'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemoveSingle = _this4.handleRemoveSingle.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: 'handleRemoveSingle',
        value: function handleRemoveSingle(option) {
            this.props.handleRemoveSingle(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

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
                this.props.options.map(function (x) {
                    return React.createElement(Option, { handleRemoveSingle: _this5.handleRemoveSingle, option: x });
                }),
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

var AddOptions = function (_React$Component4) {
    _inherits(AddOptions, _React$Component4);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.onFormSubmit = _this6.onFormSubmit.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
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
