export interface QuestionType {
  question: string;
  suggestions: string[];
}

export interface UserResponse {
  [key: string]: string;
}

export interface IndicatorQuestionType {
  content: string;
  isActive: boolean;
}

export interface SuggestionDisplayType {
  content: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface CustomBtnType {
  content: string;
  onClick: () => void;
}

export enum ViewState {
  INITIAL,
  LOADING,
  RESPONSE,
}

export class Question implements QuestionType {
  _question: string;
  _suggestions: string[];

  constructor(question: string, suggestions: string[]) {
    this._question = question;
    this._suggestions = suggestions;
  }

  get question(): string {
    return this._question;
  }

  get suggestions(): string[] {
    return this._suggestions;
  }
}
