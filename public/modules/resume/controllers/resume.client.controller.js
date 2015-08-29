'use strict';

angular.module('resume').controller('ResumeController', ['$scope',
	function($scope) {
		$scope.schools = [
			{
				'name':'Western Washington University',
				'degree':'B.S. Computer Science',
				'minors':['Math'],
				'graduate':'June 2016',
				'gpa':'3.49',
				'complete':true
			}];

		$scope.jobs = [
			{
				'company':'The Home Depot',
				'title':'Service Specialist',
				'location':'Bellingham, WA',
				'dates':'December 2011 - Present',
				'info':[
					'Need the ability to use constant teamwork/ management skills to overcome tasksand avoid conflict.',
					'Responsible for maintaining EVS, Home Depots customer service system, constant contact with their help desk in Atlanta, GA.'
				]
			},
			{
				'company':'The Home Depot',
				'title':'Department Supervisor',
				'location':'Everett, WA',
				'dates':'December 2011 - August 2013',
				'info':[
					'Responsible for maintaining inventory for my department(Flooring), which included placing orders through vendors.'
				]
			},
			{
				'company':'Western Washington University',
				'title':'Undergraduate Computer Science Mentor',
				'location':'Bellingham, WA',
				'dates':'May 2015 - Present',
				'info':[
					'Work with professors and other mentors to provide tutoring and help for students in the entry to mid level classes of Computer Science.'
				]
			},
			{
				'company':'Western Washington University',
				'title':'Research Assistant',
				'location':'Bellingham, WA',
				'dates':'January 2015 - Present',
				'info':[
					'Data processing, GUI design and algorithm implementation in Matlab.'
				]
			}
		];

		$scope.awards = [
			{
				'name':'Home Depot Part Time Employee Tuition Reimbursement Scholarship ',
				'date':'September 2015'
			},
			{
				'name':'Home Depot Golden Homer Award',
				'date':'May 2015'
			},
			{
				'name':'Home Depot Part Time Employee Tuition Reimbursement Scholarship',
				'date':'September 2014'
			},
			{
				'name':'Home Depot Customer Service Regional All-Star Award',
				'date':'December 2013'
			}
		];

		$scope.activities = [
			{
				'name':'CCDC/Cyber Defense Club',
				'date':'Fall 2015 - Present'
			},
			{
				'name':'WWU ACM Mentor',
				'date':'May 2015 - Present'
			},
			{
				'name':'WWU Hackathon Competitor',
				'date':'Fall 2015'
			},
			{
				'name':'WWU Hackathon Competitor',
				'date':'Fall 2014'
			}
		];

		$scope.projects = [
			{
				'name':'Web Development, front end work in HTML, JavaScript, CSS/LESS. Back end work in PHP and MySQL.'
			},
			{
				'name':'Advanced Programming in the UNIX environment, file system development in C.'
			},
			{
				'name':'Object Oriented Design, alongside client needs in Java.'
			},
			{
				'name':'2D Game Development using Pygame and Python, as well as C++.'
			},
			{
				'name':'3D Game Development using Blender3D, UnrealEngine, with Python scripting.'
			},
			{
				'name':'Game Story Telling Development in Inform7 along with other packages.'
			},
			{
				'name':'Minimax algorithm research using an artificial intelligence approach to a variation	of the game Nim implemented in Python.'
			}
		];
	}
]);
