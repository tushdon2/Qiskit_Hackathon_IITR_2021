from qiskit import execute, QuantumCircuit
from qiskit.providers.aer import QasmSimulator

# Import from Qiskit Aer noise module
from qiskit.providers.aer.noise import NoiseModel
from qiskit.providers.aer.noise import pauli_error
import warnings
warnings.filterwarnings('ignore')


def get_noise():

    # Error probabilities
    pb_reset = 0.03
    pb_meas = 0.1
    pb_gate1 = 0.05

    # QuantumError objects
    er_reset = pauli_error([('X', pb_reset), ('I', 1 - pb_reset)])
    er_meas = pauli_error([('X',pb_meas), ('I', 1 - pb_meas)])
    er_gate1 = pauli_error([('X',pb_gate1), ('I', 1 - pb_gate1)])
    er_gate2 = er_gate1.tensor(er_gate1)

    # Add errors to noise model
    noise = NoiseModel()
    noise.add_all_qubit_quantum_error(er_reset, "reset")
    noise.add_all_qubit_quantum_error(er_meas, "measure")
    noise.add_all_qubit_quantum_error(er_gate1, ["u1", "u2", "u3"])
    noise.add_all_qubit_quantum_error(er_gate2, ["cx"])

    return noise


def random_number():

    circ = QuantumCircuit(3)
    simulator = QasmSimulator()

    #NQRNS Circuit
    for i in range(200):
        circ.u3(0,0,0,0)
        circ.u3(0,0,0,1)
        circ.u3(0,0,0,2)
        circ.cx(0,1)
        circ.cx(1,2)
        circ.cx(0,2)
        circ.barrier()

    circ.measure_all()

    noise = get_noise()
    #get output
    job = execute(circ, simulator,
              basis_gates=noise.basis_gates,
              noise_model=noise, shots= 1)
    result = job.result()
    counts = result.get_counts(0)


    num=list(counts.keys())[0]
    num = int(num, 2)
    if num>=5 :
        num =random_number()
    return num

if __name__ == "__main__":
    arr =[0,0,0,0,0]
    for i in range (0,100) :
        number = random_number()
        arr[number] +=1
    print(arr) 