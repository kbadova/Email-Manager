import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import paths from '../../paths';

import {Link} from 'react-router-dom';

import VirtualizedSelect from 'react-virtualized-select';

import {fetchCourses, sendMessage} from './actions';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

import '../../base-styles.css';
import './styles.css';

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
    subject: '',
    content: ''
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

  addSelectedCourse = selectedCourses => {
    console.log(selectedCourses);
    const {courses} = this.state;
    let selectedStudents = [];
    selectedCourses.forEach(course => {
      const courseObj = courses.filter(c => c.id == course.value);
      const courseStudents = courseObj[0].students;
      courseStudents.map(st => {
        let obj = Object.assign(
          {},
          {label: `${st.name} - ${st.email}`, value: st.id}
        );
        selectedStudents.push(obj);
      });
    });

    this.setState({
      selectedCourses: selectedCourses,
      selectedStudents: selectedStudents
    });
  };

  addSelectedStudent = students => {
    this.setState({selectedStudents: students});
  };

  changeSubject = event => {
    this.setState({subject: event.target.value});
  };

  changeContent = event => {
    this.setState({content: event.target.value});
  };

  sendMessage = () => {
    const {subject, content, selectedStudents} = this.state;
    const students = selectedStudents.map(st => st.value);
    let data = {
      subject,
      content,
      students
    };

    this.props.sendMessage(data);
  };

  componentDidMount() {
    this.props.fetchCourses();
  }

  componentWillReceiveProps(nextProps) {
    const {courses} = nextProps;
    if (courses) {
      const coursesOptions = courses
        ? courses.map(course => {
            return Object.assign({}, {label: course.name, value: course.id});
          })
        : [];
      let allStudentsList = courses.map(c => c.students);
      let students = _.flatten(allStudentsList);
      const studentsOptions = students.map(st =>
        Object.assign({}, {label: `${st.name} - ${st.email}`, value: st.id})
      );
      this.setState({
        courses: courses,
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
      coursesOptions,
      subject,
      content
    } = this.state;

    const placeholder = selectedGroup == null ? '' : 'Избери студент';

    return (
      <div className="main-div mb-20 mt-20">
        <div className="breadcrumb">
          <Link to={paths.messages}>Начало /</Link>
          <a className="active"> Създаване на ново съобщение</a>
        </div>
        <h1>Създаване на ново съобщение</h1>
        <div className="select-group mb-20">
          <select onChange={this.changeSelectedGroup}>
            <option value="">Изпрати на</option>
            <option value={options.course}>Конкретен курс</option>
            <option value={options.students}>Отделни получатели</option>
          </select>
        </div>
        <div className="multi-select">
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
        <input
          className="input-field mb-20"
          placeholder="Добавете тема на съобщението"
          value={subject}
          onChange={this.changeSubject}
        />
        <textarea
          className="input-field textarea-field"
          cols="30"
          rows="10"
          value={content}
          onChange={this.changeContent}
        />
        {/* <input className="input-field textarea-field" value={content} onChange={this.changeContent} /> */}
        <button className="btn btn-blue pull-right" onClick={this.sendMessage}>
          Изпрати
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {courses: state.newMessage.courses};
};

const mapDispatchToProps = {
  fetchCourses,
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
