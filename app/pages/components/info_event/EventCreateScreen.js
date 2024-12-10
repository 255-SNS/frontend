import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const EventCreateScreen = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('전체'); // Default department
  const [eventName, setEventName] = useState(''); // New event name state
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState(''); // Event description
  const [isPriority, setIsPriority] = useState(false); // Default priority setting

  const departments = ['전체', '정보통신공학과', '임베디드시스템공학과', '컴퓨터공학과'];

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        {/* 이벤트 이름 */}
        <TextInput
          style={styles.inputUnderline}
          placeholder="이벤트 이름을 입력하세요"
          value={eventName}
          onChangeText={setEventName}
        />

        {/* 대상 학과 선택 */}
        <Text style={styles.label}>대상 학과</Text>
        <View style={styles.tagContainer}>
          {departments.map((department) => (
            <TouchableOpacity
              key={department}
              style={[
                styles.tag,
                selectedDepartment === department && styles.selectedTag,
              ]}
              onPress={() => handleDepartmentSelection(department)}
            >
              <Text
                style={[
                  styles.tagText,
                  selectedDepartment === department && styles.selectedTagText,
                ]}
              >
                {department}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 시작 날짜 입력 */}
        <Text style={styles.label}>시작 일자</Text>
        <TextInput
          style={styles.inputUnderline}
          placeholder="YYYY-MM-DD"
          value={startDate}
          onChangeText={setStartDate}
        />

        {/* 종료 날짜 입력 */}
        <Text style={styles.label}>종료 일자</Text>
        <TextInput
          style={styles.inputUnderline}
          placeholder="YYYY-MM-DD"
          value={endDate}
          onChangeText={setEndDate}
        />

        {/* 선착순 여부 */}
        <Text style={styles.label}>선착순 여부</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              isPriority && styles.selectedToggleButton,
            ]}
            onPress={() => setIsPriority(true)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                isPriority && styles.selectedToggleButtonText,
              ]}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              !isPriority && styles.selectedToggleButton,
            ]}
            onPress={() => setIsPriority(false)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                !isPriority && styles.selectedToggleButtonText,
              ]}
            >
              No
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bottomtext}>
          Yes 로 설정하면 시작 일자에 신청 버튼이 활성화됩니다!
        </Text>

        {/* 설명 입력 */}
        <Text style={styles.label}>이벤트 설명</Text>
        <TextInput
          style={styles.textArea}
          placeholder="이벤트에 대한 설명을 작성해주세요."
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        {/* 첨부 파일 및 사진 */}
        <View style={styles.fileContainer}>
          <TouchableOpacity style={styles.fileButton}>
            <Text style={styles.fileButtonText}>📎 파일 추가</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fileButton}>
            <Text style={styles.fileButtonText}>📷 사진 추가</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 완료 버튼 */}
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>완료</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  form: {
    marginTop: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: '#000',
  },
  tagText: {
    fontSize: 14,
    color: '#777',
  },
  selectedTagText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputUnderline: {
    borderBottomWidth: 1,
    borderColor: '#777',
    paddingVertical: 15,
    fontSize: 19,
    color: '#333333',
    marginBottom: 15,
  },
  textArea: {
    marginTop:15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  toggleButton: {
    marginTop:15,
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  bottomtext: {
    marginHorizontal: 1,
    borderBottomWidth: 1,
    borderColor: '#777',
    paddingVertical: 7,
    color: '#333333',
    marginBottom: 15,
  },
  selectedToggleButton: {
    backgroundColor: '#000',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#777',
  },
  selectedToggleButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  fileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  fileButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  fileButtonText: {
    fontSize: 16,
    color: '#333',
  },
  completeButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15,
  },
  completeButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default EventCreateScreen;
