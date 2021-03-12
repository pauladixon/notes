
// strategy

    // There is a structure to the topics that you can learn that will greatly improve your understanding if you progress through the algorithms. Here are the steps I suggest you follow:

        // Learn to evaluate efficiency (complexity) of algorithms
        // Develop a process for problem solving
        // Learn basic algorithm patterns
        // Learn basic data structures
        // Put into practice
        // Start easy and progress harder
        // Track and measure



// linked lists

    // reverse the linked list 

        // Given the head of a singly linked list, reverse the list, and return the reversed list.

        // Example 1:    
            // Input: head = [1,2,3,4,5]
            // Output: [5,4,3,2,1]
            
            var reverseList = function(head) {
                let prevNode = null
                
                while (head !== null){
                    let nextNode = head.next
                    head.next = prevNode
                    prevNode = head
                    head = nextNode
                }
                return prevNode
                
            }
