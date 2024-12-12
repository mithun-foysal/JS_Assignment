 // Function 1: calculateDifference
        function calculateDifference(a, b) {
            return a - b;
        }

        console.log("calculateDifference(10, 5):", calculateDifference(10, 5));

        // Function 2: isOdd
        function isOdd(number) {
            return number % 2 !== 0;
        }

        console.log("isOdd(3):", isOdd(3));

        // Function 3: findMin
        function findMin(numbers) {
            return Math.min(...numbers);
        }

        console.log("findMin([5, 2, 9, 1]):", findMin([5, 2, 9, 1]));

        // Function 4: filterEvenNumbers
        function filterEvenNumbers(numbers) {
            return numbers.filter(number => number % 2 === 0);
        }

        console.log("filterEvenNumbers([1, 2, 3, 4]):", filterEvenNumbers([1, 2, 3, 4]));

        // Function 5: sortArrayDescending
        function sortArrayDescending(numbers) {
            return numbers.slice().sort((a, b) => b - a);
        }

        console.log("sortArrayDescending([3, 1, 4, 2]):", sortArrayDescending([3, 1, 4, 2]));

        // Function 6: lowercaseFirstLetter
        function lowercaseFirstLetter(str) {
            if (!str) return "";
            return str.charAt(0).toLowerCase() + str.slice(1);
        }

        console.log("lowercaseFirstLetter('Hello'):", lowercaseFirstLetter("Hello"));

        // Function 7: findAverage
        function findAverage(numbers) {
            if (numbers.length === 0) return 0;
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            return sum / numbers.length;
        }

        console.log("findAverage([2, 4, 6, 8]):", findAverage([2, 4, 6, 8]));

        // Function 8: isLeapYear
        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }

        console.log("isLeapYear(2024):", isLeapYear(2024));
