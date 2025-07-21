// // dashboard.js
// let provider, signer, contract;
// let contractAddress = "0x766E361e0e3CF5cBc320d98E47Ae52237460B9b0"; // Replace with your actual contract address
// let contractABI = [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "candidateId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "position",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "dateOfBirth",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "age",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "achievements",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "gender",
// 				"type": "string"
// 			}
// 		],
// 		"name": "CandidateAdded",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "voter",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "candidateId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "position",
// 				"type": "string"
// 			}
// 		],
// 		"name": "VoteCast",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_position",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_dateOfBirth",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_age",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_achievements",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_gender",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addCandidate",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "candidates",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "candidateId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "position",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "dateOfBirth",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "age",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "achievements",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "gender",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "voteCount",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getAllCandidates",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "candidateId",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "position",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "dateOfBirth",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "age",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "achievements",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "gender",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "voteCount",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct EnhancedVoting.Candidate[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_candidateId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCandidate",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "candidateId",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "position",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "dateOfBirth",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "age",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "achievements",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "gender",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "voteCount",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct EnhancedVoting.Candidate",
// 				"name": "",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "position",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getCandidatesByPosition",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "candidateId",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "position",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "dateOfBirth",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "age",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "achievements",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "gender",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "voteCount",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct EnhancedVoting.Candidate[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getCandidatesCount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getTotalVotes",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "user",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "position",
// 				"type": "string"
// 			}
// 		],
// 		"name": "hasUserVotedForPosition",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "hasVotedForCandidate",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalVotes",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "candidateId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "vote",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"name": "votesForPosition",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "votingFee",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "withdraw",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]; // Your contract ABI goes here


let candidatesData = {};
const positions = ["president", "vicePresident", "senator", "governor", "mayor"];
let isElectionOpen = true;
let isDashboard = true;

if (!provider || !signer) {
	alert("Please connect to MetaMask first!");
}

document.addEventListener("DOMContentLoaded", function() {
    // Connect wallet button functionality
    document.getElementById("connectWallet").addEventListener("click", connectWallet);
    
    // Add candidate form submission
    const addCandidateForm = document.getElementById('addCandidateForm');
    if (addCandidateForm) {
        addCandidateForm.addEventListener('submit', handleAddCandidate);
    }

    
    if (document.getElementById("endElectionBtn")) {
        document.getElementById("endElectionBtn").addEventListener("click", endElection);
    }

	if (document.getElementById("openElectionBtn")) {
        document.getElementById("openElectionBtn").addEventListener("click", openElection);
    }
});

// Connect to MetaMask and the blockchain
// Connect to MetaMask and the blockchain
async function connectWallet() {
    if (window.ethereum) {
        try {
            provider = new ethers.BrowserProvider(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            signer = await provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log("Connected:", await signer.getAddress());
            document.getElementById("connectWallet").innerText = "Connected";
            
            // After connection, fetch blockchain data
            await updateDashboardStats();
			if (!isElectionOpen) {
				alert("This election is closed. You can still view the candidates and results.");
			}
			await getCandidates();
        } catch (error) {
            console.error("Connection error:", error);
        }
    } else {
        alert("MetaMask is not installed!");
    }
}
// Handle adding a new candidate
async function handleAddCandidate(event) {
    event.preventDefault();
    
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    // Get form values
    const candidateName = document.getElementById('candidateName').value;
    const candidatePosition = document.getElementById('candidatePosition').value;
    const candidateDOB = document.getElementById('candidateDOB').value;
    const candidateAge = document.getElementById('candidateAge').value;
    const candidateAchievements = document.getElementById('candidateAchievements').value;
    const candidateGender = document.getElementById('candidateGender').value;
	console.log(candidateName, candidatePosition, candidateDOB, candidateAge, candidateAchievements, candidateGender);
    
    try {
        // Call the blockchain function to add candidate
        // Note: We're only sending name and position as per the contract ABI
        await addCandidateToBlockchain(candidateName, candidatePosition, candidateDOB, candidateAge, candidateAchievements, candidateGender);
        
        // Clear the form after submission
        document.getElementById('addCandidateForm').reset();
    } catch (error) {
        console.error("Error adding candidate:", error);
        alert("Error adding candidate. Check console for details.");
    }
}

// Add candidate to blockchain
async function addCandidateToBlockchain(name, position, dateOfBirth, age, achievements, gender) {
    if (!contract || !signer) {
        throw new Error("Not connected to blockchain");
    }

	var nameProcessed = name;
	var positionProcessed = position.toString().toLowerCase();
	const formattedDOB = new Date(dateOfBirth).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	var dateOfBirthProcessed = formattedDOB.toString();
	var ageProcessed = age.toString().toLowerCase();
	var achievementsProcessed = achievements.toString();
	var genderProcessed = gender.toString().toLowerCase();
	
	try {
		document.getElementById("loader").style.display = "flex";
		const tx = await contract.addCandidate(nameProcessed, positionProcessed, dateOfBirthProcessed, ageProcessed, achievementsProcessed, genderProcessed);
		await tx.wait();
		console.log("Candidate added to blockchain:", nameProcessed, positionProcessed, dateOfBirthProcessed, ageProcessed, achievementsProcessed, genderProcessed);
		alert("Candidate added successfully!");
	} catch (error) {
		console.error("Error adding candidate to blockchain:", error);
		alert("Error adding candidate to blockchain. Check console for details.");
		return;
	} finally {
		document.getElementById("loader").style.display = "none";
		getCandidates();
	}
    
}

async function getCandidates() {
    try {
        const tabContainer = document.querySelector(".tabs");
        const contentContainer = document.querySelector(".tcontent");

        tabContainer.innerHTML = ""; // Clear previous tabs
        contentContainer.innerHTML = ""; // Clear previous content

        let firstPosition = null; // Track first position for default activation

        for (let i = 0; i < positions.length; i++) {
            const position = positions[i];
            candidatesData[position] = [];
            const candidates = await contract.getCandidatesByPosition(position);
            
            // Convert candidates to the required format
            for (let j = 0; j < candidates.length; j++) {
                const candidate = candidates[j];
                candidatesData[position].push({
                    id: parseInt(candidate.candidateId),
                    name: candidate.name,
                    votes: parseInt(candidate.voteCount)
                });
            }

            // Sort candidates by votes (descending)
            candidatesData[position].sort((a, b) => b.votes - a.votes);

            // Store the first position for default activation
            if (!firstPosition) firstPosition = position;

            // Create tab button
            const tabButton = document.createElement("button");
			const positionLabel = position.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase());
            tabButton.textContent = positionLabel;
            tabButton.classList.add("tab-button");
            tabButton.addEventListener("click", () => showTab(position));

            tabContainer.appendChild(tabButton);

            // Create content for the tab
            const tabContent = document.createElement("div");
            tabContent.classList.add("tab-content");
            tabContent.id = `tab-${position}`;

            let tableHTML = `
                <table class="candidates-table">
                    <tr>
                        <th>Name</th>
                        <th>Votes</th>
                    </tr>
            `;

            candidatesData[position].forEach(candidate => {
                tableHTML += `
                    <tr>
                        <td>${candidate.name}</td>
                        <td>${candidate.votes}</td>
                    </tr>
                `;
            });

            tableHTML += "</table>";
            tabContent.innerHTML = tableHTML;

            contentContainer.appendChild(tabContent);
        }

        // Activate the first tab by default
        if (firstPosition) {
            showTab(firstPosition);
        }
    } catch (error) {
        console.error("Error getting candidates:", error);
    }
}

// Function to show a selected tab
function showTab(position) {
    // Remove 'active' class from all buttons
    document.querySelectorAll(".tab-button").forEach(btn => {
        btn.classList.remove("active");
		const positionLabel = position.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase());
        if (btn.textContent === positionLabel) {
            btn.classList.add("active");
        }
    });

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
    });

    // Show the selected tab content
    document.getElementById(`tab-${position}`).classList.add("active");
}

// Update dashboard statistics from blockchain
async function updateDashboardStats() {
    if (!contract) return;
    
    try {
        await updateTotalVotes();
		await updateRegisteredVoters();
		await updateElectionStatus();
    } catch (error) {
        console.error("Error updating stats:", error);
    }
}

// Set up blockchain event listeners for real-time updates
function setupEventListeners() {
    if (!contract) return;
    
    // Listen for vote cast events
    contract.on("VoteCast", (voter, candidateId, position) => {
        console.log("New vote cast by (EMIT):", voter, "for candidate:", candidateId, "position:", position);
        updateDashboardStats();
    });
    
    // Listen for candidate added events
    contract.on("CandidateAdded", (candidateId, name, position, dateOfBirth, age, achievements, gender) => {
        console.log("New candidate added (EMIT):", name, position, dateOfBirth, age, achievements, gender);
        updateDashboardStats();
    });
}

// End an ongoing election (placeholder - adjust based on your actual contract)
async function endElection() {
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    try {
        const tx = await contract.endElection();
        await tx.wait();
        
        alert("Election ended successfully!");
        updateDashboardStats();
		
        document.getElementById("openElectionBtn").disabled = false; 
        document.getElementById("endElectionBtn").disabled = true; 

    } catch (error) {
        console.error("Error ending election:", error);
        alert("Error ending election. Check console for details.");
    }
}

async function openElection() {
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    try {
        const tx = await contract.openElection();
        await tx.wait();
        
        alert("Election re-opened successfully!");
        updateDashboardStats();
		
        document.getElementById("endElectionBtn").disabled = false; 
        document.getElementById("openElectionBtn").disabled = true; 

    } catch (error) {
        console.error("Error ending election:", error);
        alert("Error ending election. Check console for details.");
    }
}

async function updateTotalVotes() {
    if (contract) {
        try {
            // Get total votes from the contract
            totalVotesCount = await contract.getTotalVotes();
            document.getElementById("totalVotes").innerText = totalVotesCount.toString();
        } catch (error) {
            console.error("Error getting total votes:", error);
        }
    }
}


async function updateRegisteredVoters() {
    if (contract) {
        try {
            // Get total votes from the contract
			const uniqueVoters = await contract.getUniqueVoters();
			var uniqueVotersCount = 0;
			if (uniqueVoters) {
				uniqueVotersCount = uniqueVoters.length;
			}
			document.getElementById("registeredVoters").innerText = uniqueVotersCount.toString();
        } catch (error) {
            console.error("Error getting registered voters:", error);
        }
    }
}


async function updateElectionStatus() {
    if (contract) {
        try {
            // Get total votes from the contract
			const isOpen = await contract.getElectionStatus();
			isElectionOpen = isOpen;
			if (isOpen) {
				document.getElementById("openElectionBtn").disabled = true; 
				document.getElementById("endElectionBtn").disabled = false; 
			} else {
				document.getElementById("openElectionBtn").disabled = false; 
				document.getElementById("endElectionBtn").disabled = true;
			}
        } catch (error) {
            console.error("Error getting election status:", error);
        }
    }
}