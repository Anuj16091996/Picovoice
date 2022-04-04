const allPossiblities = {
  0: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch",
  },
  1: {
    build: "Stable (1.11.0)",
    OS: "MAC",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "# MacOS Binaries dont support CUDA, install from source if CUDA is needed conda install pytorch torchvision torchaudio -c pytorch",
  },
  2: {
    build: "Stable (1.11.0)",
    OS: "Windows",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3",
  },
  3: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Pip",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message: "pip3 install torch torchvision torchaudio",
  },
  4: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "LibTorch",
    Language: "C++/Java",
    Compute: "CUDA 10.2",
    Message:
      "Download here (Pre-cxx11 ABI): \n" +
      "https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip\n\n" +
      "Download here (cxx11 ABI):\n" +
      "https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip",
  },
  5: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Source",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source",
  },

  6: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Conda",
    Language: "C++/Java",
    Compute: "CUDA 10.2",
    Message:
      "Download here (Pre-cxx11 ABI): \n" +
      "https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.11.0%2Bcu102.zip\n\n" +
      "Download here (cxx11 ABI):\n" +
      "https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.11.0%2Bcu102.zip",
  },

  7: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 11.3",
    Message:
      "conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",
  },
  8: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "ROCm 4.2 (beta)",
    Message:
      "NOTE: Conda packages are not currently available for ROCm, please use pip instead",
  },
  9: {
    build: "Stable (1.11.0)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "CPU",
    Message: "conda install pytorch torchvision torchaudio cpuonly -c pytorch",
  },
  10: {
    build: "Preview(Nightly)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly",
  },
  11: {
    build: "Preview(Nightly)",
    OS: "MAC",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message: "conda install pytorch torchvision torchaudio -c pytorch-nightly",
  },
  12: {
    build: "Preview(Nightly)",
    OS: "Windows",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3",
  },
  13: {
    build: "Preview(Nightly)",
    OS: "Linux",
    Package: "Pip",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "pip3 install --pre torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/nightly/cu102",
  },

  14: {
    build: "Preview(Nightly)",
    OS: "Windows",
    Package: "LibTorch",
    Language: "C++/Java",
    Compute: "CUDA 10.2",
    Message:
      "CUDA-10.2 PyTorch builds are no longer available for Windows, please use CUDA-11.3",
  },

  15: {
    build: "Preview(Nightly)",
    OS: "Linux",
    Package: "LibTorch",
    Language: "C++/Java",
    Compute: "CUDA 10.2",
    Message:
      "Download here (Pre-cxx11 ABI): \n" +
      "https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip\n\n" +
      "Download here (cxx11 ABI):\n" +
      "https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip",
  },
  16: {
    build: "Preview(Nightly)",
    OS: "MAC",
    Package: "LibTorch",
    Language: "C++/Java",
    Compute: "CUDA 10.2",
    Message:
      "MacOS binaries do not support CUDA. Download CPU libtorch here:\n" +
      "Download here (cxx11 ABI):\n" +
      "https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip",
  },
  17: {
    build: "LTS(1.8.2)",
    OS: "Linux",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lt\n\n" +
      "Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.",
  },
  18: {
    build: "LTS(1.8.2)",
    OS: "MAC",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "# macOS is not currently supported for lts\n" +
      "Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.",
  },
  19: {
    build: "LTS(1.8.2)",
    OS: "Windows",
    Package: "Conda",
    Language: "Python",
    Compute: "CUDA 10.2",
    Message:
      "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts\n" +
      "Note: Additional support for these binaries may be provided by PyTorch Enterprise Support Program Participants.",
  },
};

export default allPossiblities;
