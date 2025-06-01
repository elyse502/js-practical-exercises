exports.calculateExpression = function (expr) {
    const operators = {
        '+': { precedence: 1, associativity: 'L' },
        '-': { precedence: 1, associativity: 'L' },
        '*': { precedence: 2, associativity: 'L' },
        '/': { precedence: 2, associativity: 'L' }
    };

    function isOperator(ch) {
        return ['+', '-', '*', '/'].includes(ch);
    }

    function toPostfix(tokens) {
        const output = [];
        const stack = [];

        for (let token of tokens) {
            if (!isNaN(token)) {
                output.push(Number(token));
            } else if (isOperator(token)) {
                while (
                    stack.length &&
                    isOperator(stack[stack.length - 1]) &&
                    (
                        (operators[token].associativity === 'L' &&
                            operators[token].precedence <= operators[stack[stack.length - 1]].precedence)
                    )
                ) {
                    output.push(stack.pop());
                }
                stack.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop());
                }
                stack.pop(); // remove '('
            }
        }

        while (stack.length) {
            output.push(stack.pop());
        }

        return output;
    }

    function evaluatePostfix(postfix) {
        const stack = [];

        for (let token of postfix) {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                const b = stack.pop();
                const a = stack.pop();
                let result;
                switch (token) {
                    case '+': result = a + b; break;
                    case '-': result = a - b; break;
                    case '*': result = a * b; break;
                    case '/': result = a / b; break; // JS float division
                }
                stack.push(result);
            }
        }

        return stack[0];
    }

    function tokenize(expr) {
        const tokens = [];
        let number = '';
        for (let char of expr) {
            if (char === ' ') continue;
            if (!isNaN(char)) {
                number += char;
            } else {
                if (number !== '') {
                    tokens.push(number);
                    number = '';
                }
                tokens.push(char);
            }
        }
        if (number !== '') tokens.push(number);
        return tokens;
    }

    const tokens = tokenize(expr);
    const postfix = toPostfix(tokens);
    return evaluatePostfix(postfix);
}
