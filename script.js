        function generateArray() {
            var array = [];
            var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            
            for (var i = 0; i < 1000; i++) {
                var length = Math.floor(Math.random() * 5) + 1;
                var element = '';
                
                for (var j = 0; j < length; j++) {
                    var index = Math.floor(Math.random() * characters.length);
                    element += characters.charAt(index);
                }
                
                array.push(element);
            }
            
            var output = document.getElementById('output');
            output.textContent = array.join(', ');
        }
        
        function sortArray(algorithm) {
            var output = document.getElementById('output');
            var array = output.textContent.split(',').map(item => item.trim());
          
            var startTime = performance.now();
            
            switch (algorithm) {
              case 'bubbleSort':
                bubbleSort(array);
                break;
              case 'selectionSort':
                selectionSort(array);
                break;
              case 'insertionSort':
                insertionSort(array);
                break;
              case 'mergeSort':
                array = mergeSort(array);
                break;
              case 'quickSort':
                array = quickSort(array);
                break;
              default:
                break;
            }
            
            var endTime = performance.now();
            var elapsedTime = endTime - startTime;
          
            output.textContent = array.join(', ');
          
            var timeOutput = document.getElementById('time-output');
            timeOutput.textContent = `Running Time: ${elapsedTime.toFixed(2)}ms`;
          }
        
        
        function bubbleSort(array) {
            var len = array.length;
            for (var i = 0; i < len - 1; i++) {
                for (var j = 0; j < len - 1 - i; j++) {
                    if (array[j] > array[j + 1]) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        
        function selectionSort(array) {
            var len = array.length;
            for (var i = 0; i < len - 1; i++) {
                var minIndex = i;
                for (var j = i + 1; j < len; j++) {
                    if (array[j] < array[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    var temp = array[i];
                    array[i] = array[minIndex];
                    array[minIndex] = temp;
                }
            }
        }
        
        function insertionSort(array) {
            var len = array.length;
            for (var i = 1; i < len; i++) {
                var key = array[i];
                var j = i - 1;
                while (j >= 0 && array[j] > key) {
                    array[j + 1] = array[j];
                    j--;
                }
                array[j + 1] = key;
            }
        }
        
        function mergeSort(array) {
            if (array.length <= 1) {
                return array;
            }
            
            const mid = Math.floor(array.length / 2);
            const left = array.slice(0, mid);
            const right = array.slice(mid);
            
            return merge(mergeSort(left), mergeSort(right));
        }
        
        function merge(left, right) {
            const result = [];
            let leftIndex = 0;
            let rightIndex = 0;
            
            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            
            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        }
        
        function quickSort(array) {
            if (array.length <= 1) {
                return array;
            }
            
            const pivotIndex = Math.floor(array.length / 2);
            const pivot = array[pivotIndex];
            const less = [];
            const equal = [];
            const greater = [];
            
            for (let i = 0; i < array.length; i++) {
                if (array[i] < pivot) {
                    less.push(array[i]);
                } else if (array[i] === pivot) {
                    equal.push(array[i]);
                } else {
                    greater.push(array[i]);
                }
            }
            
            return quickSort(less).concat(equal).concat(quickSort(greater));
        }
        


  
