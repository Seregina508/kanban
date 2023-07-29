import React, {useMemo} from 'react';

const useSearch = (tasks, searchQuery) => {

    const searchedTasks = useMemo(() => {
        if (searchQuery === '') return tasks;
        const newTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log('----function searchTask worked----')
        return newTasks;
    }, [searchQuery, tasks])

    return  searchedTasks;
};

export {useSearch};