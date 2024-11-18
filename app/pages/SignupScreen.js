import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const radioButtonsData = [
  { label: '정보통신공학', value: 0 },
  { label: '컴퓨터공학', value: 1 },
  { label: '임베디드공학', value: 2 },
];

const SignupScreen = () => {
  const [selectedDept, setSelectedDept] = useState(0);

  const handleRadioSelect = (value) => {
    setSelectedDept(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원정보 입력</Text>
      <TextInput placeholder="이름" style={styles.input} />
      <TextInput placeholder="학번" style={styles.input} />
      <TextInput placeholder="학교 이메일 (@inu.ac.kr)" style={styles.input} />
      <Text style={styles.subText}>해당 이메일로 가입 링크를 보내드립니다!</Text>
      <TextInput placeholder="비밀번호" style={styles.input} secureTextEntry />

      <Text style={styles.label}>학과</Text>
      <View style={styles.radioContainer}>
        <RadioForm
          radio_props={radioButtonsData}
          initial={0}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#333'}
          selectedButtonColor={'#333'}
          onPress={handleRadioSelect}
          labelStyle={{ marginRight: 10 }}
          buttonSize={10} // 버튼 크기 조절
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',  // 전체 폼을 수직으로 가운데 정렬
    alignItems: 'center',      // 전체 폼을 수평으로 가운데 정렬
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',       // 제목 텍스트 가운데 정렬
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  subText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
    alignSelf: 'center',       // 부가 설명 텍스트 가운데 정렬
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    alignSelf: 'flex-start',       // 학과 라벨 왼쪽 정렬
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // 라디오 버튼 그룹을 가운데 정렬
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SignupScreen;
