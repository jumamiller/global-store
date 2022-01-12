import {reactive} from 'vue';

export const store={
    state:reactive({
        numbers:[1,2,3,4,5,6,7,8,9,10],
    }),
    addNewNumber(number){
        this.state.numbers.push(number)
    }
}
