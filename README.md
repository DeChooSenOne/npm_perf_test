# NPM Performance testing

Here is where I do some of my personal testing of NPM for my school assignment.

## Test tasks

- CPU-bound tasks -> This test is to test the performance of the CPU when running a task that is CPU-bound. This is done
  by running a task that is CPU-bound and measuring the time it takes to complete the task.
  <br>Task used: `fibonacci(40)`
- I/O-bound tasks -> This test is to test the performance of the I/O when running a task that is I/O-bound. This is done
  by running a task that is I/O-bound and measuring the time it takes to complete the task.
  <br>Task used: `readFile('file.txt')`

## Method of testing

In this project I will be using the autocannon package to test the performance of the NPM package. The autocannon
package is a load testing tool that is used to test the performance of a server. In this case, I will be using it to
test the performance of the NPM package. The autocannon package will be used to test the performance of the NPM package
by running a task that is CPU-bound and measuring the time it takes to complete the task. In addition to that the
autocannon package will also be used to test the performance of the NPM package by running a task that is I/O-bound and
measuring the time it takes to complete the task.