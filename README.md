# Usage demo for React's `useImperativeHandle()` Hook

A demonstration project to show the usage of `useImperativeHandle()` hook.

This demo includes 2 extra packages-

| Package            | Description                          |
| ------------------ | ------------------------------------ |
| react-modal        | React component for using Modal      |
| @types/react-modal | Type definitions for **react-modal** |

## Files

| Path                        | Description                           |
| --------------------------- | ------------------------------------- |
| src\App.tsx                 | Demo App for `useImperativeHandle()`  |
| src\alert.component.tsx     | Alert component with custom instance  |
| src\App.old.tsx             | Demo App for props based component    |
| src\alert.component.old.tsx | Alert component that works with props |

## Profiling results
### Prop based Alert
![prop-based-alert-profile-result](/assets/profile-1.jpg)

### Custom instance based Alert
![custom-instance-based-alert-profile-result](/assets/profile-2.jpg)