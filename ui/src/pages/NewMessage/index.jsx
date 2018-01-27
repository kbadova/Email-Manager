import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

const options = {
  course: 'course',
  students: 'students'
};

class NewMessage extends React.Component {
  state = {
    selectedGroup: null,
    selectedCourses: [],
    form: {}
  };

  changeSelectedGroup = selectedOptions => {
    switch (selectedOptions.target.value) {
      case options.course:
        this.setState({selectedGroup: options.course});
        break;
      case options.students:
        this.setState({selectedGroup: options.students});
        break;
    }
  };

  addSelectedCourse = course => {
    console.log(course);
    // this.setState({selectedCourses: })
  };

  addSelectedStudent = students => {
    console.log(students);
  };
  render() {
    const {
      selectedGroup,
      courses,
      selectedCourses,
      students,
      selectedStudents
    } = this.state;

    const placeholder = selectedGroup == null ? '' : 'Избери студент';

    return (
      <div>
        <select onChange={this.changeSelectedGroup}>
          <option value="">Изпрати на</option>
          <option value={options.course}>Конкретен курс</option>
          <option value={options.students}>Отделни получатели</option>
        </select>

        {selectedGroup == options.course ? (
          <VirtualizedSelect
            className=""
            options={courses}
            placeholder={'Избери курс'}
            multi={true}
            value={selectedCourses}
            onChange={this.addSelectedCourse}
          />
        ) : (
          <VirtualizedSelect
            className=""
            options={students}
            placeholder={placeholder}
            value={selectedStudents}
            onChange={this.addSelectedStudent}
          />
        )}
      </div>
    );
  }
}

export default NewMessage;
