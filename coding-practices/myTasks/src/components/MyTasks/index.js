import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TagItem from '../TagItem'
import Task from '../Task'

import {
  BgContainer,
  AppContainer,
  CreateTaskContainer,
  CreateTaskHeading,
  InputContainer,
  LabelText,
  Input,
  Select,
  Option,
  AddTaskButton,
  DisplayTaskContainer,
  SectionHeading,
  TagItemList,
  NoTaskContainer,
  NoTaskText,
  TaskItemList,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    option: tagsList[0].optionId,
    inputText: '',
    selectedTag: '',
    taskList: [],
  }

  changeOption = event => {
    this.setState({option: event.target.value})
  }

  onSelectTag = id => {
    const {selectedTag} = this.state
    if (selectedTag === id) {
      this.setState({selectedTag: ''})
    } else {
      this.setState({selectedTag: id})
    }
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  submitTask = event => {
    event.preventDefault()
    const {inputText, option} = this.state
    const selectedTag = tagsList.find(eachTag => eachTag.optionId === option)
    const newTask = {
      taskTitle: inputText,
      taskTag: selectedTag.displayText,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      option: tagsList[0].optionId,
      inputText: '',
    }))
  }

  filterTaskList = () => {
    const {taskList, selectedTag} = this.state
    if (selectedTag !== '') {
      const filteredTask = taskList.filter(
        eachTask => eachTask.taskTag.toUpperCase() === selectedTag,
      )
      return filteredTask
    }
    return taskList
  }

  renderTaskItems = filteredTask => (
    <TaskItemList>
      {filteredTask.map(eachTask => (
        <Task key={eachTask.id} taskDetail={eachTask} />
      ))}
    </TaskItemList>
  )

  renderNoTask = () => (
    <NoTaskContainer>
      <NoTaskText>No Tasks Added Yet</NoTaskText>
    </NoTaskContainer>
  )

  render() {
    const {option, selectedTag, inputText} = this.state
    const filteredTask = this.filterTaskList()
    return (
      <BgContainer>
        <AppContainer>
          <CreateTaskContainer onSubmit={this.submitTask}>
            <CreateTaskHeading>Create a task!</CreateTaskHeading>
            <InputContainer>
              <LabelText htmlFor="task">Task</LabelText>
              <Input
                id="task"
                onChange={this.onChangeInputText}
                value={inputText}
                type="text"
                placeholder="Enter the task here"
              />
            </InputContainer>
            <InputContainer>
              <LabelText htmlFor="tags">Tags</LabelText>
              <Select id="tags" onChange={this.changeOption} value={option}>
                {tagsList.map(eachTag => (
                  <Option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </Option>
                ))}
              </Select>
            </InputContainer>
            <AddTaskButton type="submit">Add Task</AddTaskButton>
          </CreateTaskContainer>
          <DisplayTaskContainer>
            <SectionHeading>Tags</SectionHeading>
            <TagItemList>
              {tagsList.map(eachTag => (
                <TagItem
                  key={eachTag.optionId}
                  tagDetail={eachTag}
                  onSelectTag={this.onSelectTag}
                  selectedTag={selectedTag}
                />
              ))}
            </TagItemList>
            <SectionHeading>Tasks</SectionHeading>
            {filteredTask.length > 0
              ? this.renderTaskItems(filteredTask)
              : this.renderNoTask()}
          </DisplayTaskContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default MyTasks
