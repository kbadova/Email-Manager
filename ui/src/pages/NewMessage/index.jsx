import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';

import {fetchCourses} from './actions';
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
    students: [],
    selectedStudents: [],
    coursesOptions: [],
    studentsOptions: [],
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

  addSelectedCourse = courses => {
    this.setState({selectedCourses: courses});
  };

  addSelectedStudent = students => {
    this.setState({selectedStudents: students});
  };

  componentDidMount() {
    this.props.fetchCourses();
  }

  componentWillReceiveProps(nextProps) {
    const {courses} = nextProps;
    if (courses) {
      const coursesOptions = courses
        ? courses.map(course => {
            return Object.assign({}, {label: course.name, value: course.name});
          })
        : [];
      let allStudentsList = courses.map(c => c.students);
      let students = _.flatten(allStudentsList);
      const studentsOptions = students.map(st =>
        Object.assign({}, {label: `${st.name} - ${st.email}`, value: st.id})
      );
      this.setState({
        students: students,
        studentsOptions: studentsOptions,
        coursesOptions: coursesOptions
      });
    }
  }

  render() {
    const {
      selectedGroup,
      selectedCourses,
      selectedStudents,
      studentsOptions,
      coursesOptions
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
            options={coursesOptions}
            placeholder={'Избери курс'}
            multi={true}
            value={selectedCourses}
            onChange={this.addSelectedCourse}
          />
        ) : (
          <VirtualizedSelect
            className=""
            options={studentsOptions}
            placeholder={placeholder}
            multi={true}
            value={selectedStudents}
            onChange={this.addSelectedStudent}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {courses: state.newMessage.courses};
};

const mapDispatchToProps = {
  fetchCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
